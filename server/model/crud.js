const { Client } = require("pg");
// const { dbConf } = require("../../config");
const db = require("./db");

module.exports = {
  getAll: async table => {
    try {
      const query = `SELECT * FROM ${table}`;
      const results = await db.query(query);
      return results.rows;
    } catch (error) {
      return error;
    }
  },
  getOne: async (table, id) => {
    const query = `
      SELECT * FROM ${table}
      WHERE ${table}.id = ${id}
    `;
    const results = await db.query(query);
    return results;
  },
  create: async (table, body) => {
    const dbColString = Object.keys(body).join(", ");

    const dbValueString = Object.values(body)
      .map(value => {
        if (value === null) return "null";
        if (typeof value === "string") return "'" + value + "'";
        return value;
      })
      .join(", ");

    const dbStatement = `insert into ${table} (${dbColString}) values (${dbValueString});`;

    try {
      const result = await db.query(dbStatement);
      return result;
    } catch (err) {
      return err;
    }
  },
  update: async (table, id, data) => {
    const keys = Object.keys(data);
    let setStr = "";
    for (let i = 0; i < keys.length; i += 1) {
      let value = data[keys[i]];
      if (typeof value === "string") {
        value = `'${value}'`;
      }
      if (typeof value === null) {
        value = `'null'`;
      }
      let newStr = `${keys[i]} = ${value}`;
      if (i !== keys.length - 1) {
        newStr = `${newStr},`;
      }
      setStr = `${setStr} ${newStr}`;
    }

    const query = `
      UPDATE ${table} 
      SET ${setStr} 
      WHERE ${table}.id = ${id}
    `;
    const results = await db.query(query);
    return results;
  },
  delete: async (table, id) => {
    const query = `
      DELETE ${table}
      WHERE ${table}.id = ${id}
    `;
    const results = await db.query(query);
    return results;
  }
};
