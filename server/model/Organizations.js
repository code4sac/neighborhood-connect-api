const db = require('../model/db');

module.exports = {
  getAll(id) {
    return db.query(`select * from test.organization where id = ${id}`)
  }
}