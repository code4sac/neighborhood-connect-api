const db = require("../model/db");

module.exports = {
  readUser: async id => {
    try {
      const result = await db.query(
        `select * from test.user ${id ? `where id = ${id}` : ""}`
      );
      return result;
    } catch (err) {
      console.log(err);
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
    const dbColString = Object.keys(body).join(', ');

    const dbValueString = Object.values(body).map(value => {
      if (value === null) return 'null';
      if (typeof value === 'string') return "'" + value + "'";
      return value;
    }).join(', ');

    const dbStatement = `insert into test.user (${dbColString}) values (${dbValueString});`

    console.log(dbStatement);
    try {
      const result = await db.query(dbStatement);
      return result;
    } catch (err) {
      return err;
    }
  },
  updateUser: async params => {
    const {
      id,
      password,
      first_name,
      last_name,
      user_type,
      phone,
      email,
      organization_id,
      notification_type_id
    } = params;
    console.log(id);
    try {
      const result = await db.query("update");
      return result;
    } catch (err) {
      return err;
    }
  }
};
