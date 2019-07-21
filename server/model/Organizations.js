const db = require('./db');

module.exports = {
  getOrg(id, cb) {
    let query = `select * from test.organization ${id ? `where id = ${id}` : ''}`;
    db.query(query, cb);
  },
  getOrgUsers(id, cb) {
    let query = `select * from test.user ${id ? `where organization_id = ${id}` : ''}`;
    db.query(query, cb);
  }
}