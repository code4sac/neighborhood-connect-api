const db = require("../model/db");

module.exports = {
  readUser: async id => {
    try {
      const result = await db.query(
        `select * from test.users where id = ${id}`
      );
      db.end();
    } catch (err) {
      return err;
    }
  },
  readAllUsers: async () => {
    try {
      const result = await db.query(`select * from test.user`);
      return result;
    } catch (err) {
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
    // todo params
    try {
      const result = await db.query("update");
      return result;
    } catch (err) {
      return err;
    }
  }
};
