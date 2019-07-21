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
    } catch {
      console.log(err);
      return err;
    }
  },
  createUser: async params => {
    //todo params
    try {
      const result = await db.query("insert...");
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
