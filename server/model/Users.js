const db = require("../model/db");

module.exports = {
  readUser: async id => {
    try {
      const result = await db.query(
        `select * from test.user ${id ? `where id = ${id}` : ""}`
      );
      return result;
    } catch (err) {
      return err;
    }
  },

  readOrgUsers: async orgId => {
    try {
      const result = await db.query(
        `select * from test.user where organization_id = ${orgId}`
      );
      return result;
    } catch(err) {
      console.log(err);
      return err;
    }
  },

  createUser: async body => {
    const dbColString = Object.keys(body).join(", ");

    const dbValueString = Object.values(body).map(value => {
      if (value === null) return 'null';
      if (typeof value === 'string') return `'${value}'`;
      return value;
    }).join(', ');

    const dbStatement = `insert into test.user (${dbColString}) values (${dbValueString});`;

    try {
      const result = await db.query(dbStatement);
      return result;
    } catch (err) {
      return err;
    }
  },
  updateUser: async (id, data) => {
    const keys = Object.keys(data);
    let setStr = "";
    for (let i = 0; i < keys.length; i += 1) {
      let newStr = `${keys[i]} = ${db.escape(data[keys[i]])}`;
      if (i !== keys.length - 1) {
        newStr = `${newStr},`;
      }
      setStr = `${setStr} ${newStr}`;
    }
    const query = `
      INSERT test.user
      SET ${setStr} 
      WHERE ${table}.id = ${db.escape(id)}
    `;
    console.log(query);
    const results = await db.query(query);
    return results;
  }
};
