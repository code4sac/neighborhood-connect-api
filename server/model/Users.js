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
    // todo params
    try {
      const result = await db.query("update");
      return result;
    } catch (err) {
      return err;
    }
  }
};
