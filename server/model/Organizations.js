const db = require('../model/db');

module.exports = {
  getAll(id, cb) {
    db.query(`select * from organization`, cb);// where id = ${id}`, cb)
  }
}