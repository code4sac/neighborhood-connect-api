const db = require('../model/db');

module.exports = {
  getAll(id, cb) {
    db.query(`select * from test.organization where id = ${id}`, cb)
  }
}