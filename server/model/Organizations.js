const db = require('../model/db');

module.exports = {
  getOne(id, cb) {
    db.query(`select * from test.organization where id = ${id}`, cb)
  },
  getAll(cb) {
    db.query(`select * from test.organization`, cb);
  }
}