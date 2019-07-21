const db = require('../model/db');

module.exports = {
  getTypes(cb) {
    db.query(`select * from test.priority_type`, cb)
  },

  getType(id, cb) {
    db.query(`select * from test.priority_type where id = ${id}`, cb)
  }
}