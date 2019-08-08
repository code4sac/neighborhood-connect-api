const db = require('../model/db');

module.exports = {
  // should not send all columns, as pw is still in the db tables
  readUser: async (id) => {
    return db.query(
        `SELECT * FROM "user" ${id ? `WHERE id = ${id}` : ''}`
    );
  },

  // should maybe not send all columns, depends on UI
  readOrgUsers: async (orgId) => {
    return db.query(
        `SELECT * FROM "user" WHERE organization_id = ${orgId}`
    );
  },

  createUser: async (body) => {
    const ColString = Object.keys(body).join(', ');

    const ValueString = Object.values(body).map((value) => {
      if (value === null) return 'null';
      if (typeof value === 'string') return `'${value}'`;
      return value;
    }).join(', ');

    const query = `INSERT INTO "user" (${ColString}) VALUES (${ValueString});`;

    return db.query(query);
  },

  // needs update to make create and update more idiomatic
  updateUser: async (id, body) => {
    const keys = Object.keys(body);
    let setStr = '';
    for (let i = 0; i < keys.length; i += 1) {
      let newStr = `${keys[i]} = ${db.escape(body[keys[i]])}`;
      if (i !== keys.length - 1) {
        newStr = `${newStr},`;
      }
      setStr = `${setStr} ${newStr}`;
    }
    const query = `
      INSERT "user" SET ${setStr} WHERE "user".id = ${db.escape(id)}
    `;
    return db.query(query);
  },
};
