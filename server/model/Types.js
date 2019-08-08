const db = require('./db');

module.exports = {
  getTypes(cb) {
    db.query(`select * from priority_type`, cb);
  },

  getType(id, cb) {
    db.query(`select * from priority_type where id = ${id}`, cb);
  },
};
