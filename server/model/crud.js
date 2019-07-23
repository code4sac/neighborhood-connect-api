const { Client } = require("pg");
// const { dbConf } = require("../../config");
const db = require("../model/db");

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
  create: async (table, data) => {
    try {
      delete data.id;
      const keys = Object.keys(data);
      const values = keys.map(value => data[value]);
      const placeholders = values.map((value, index) => `$${index + 1}`);
      const query = `
        INSERT INTO ${table}(${keys.join(",")})
        VALUES(${placeholders.join(",")})
        RETURNING *
      `;
      const results = await db.query(query, values);
      return results;
    } catch (error) {
      return error;
    }
  },
  update: async (table, id, data) => {
    const keys = Object.keys(data);
    let setStr = "";
    for (let i = 0; i < keys.length; i += 1) {
      let newStr = `${keys[i]} = ${data[keys[i]]}`;
      if (i !== keys.length - 1) {
        newStr = `${newStr},`;
      }
      setStr = `${setStr} ${newStr}`;
    }
    const query = `
      INSERT ${table} 
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
