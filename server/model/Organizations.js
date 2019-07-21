const db = require('./db');

module.exports = {
  getOrg(id, cb) {
    // needs type
    let fields = id ? '*' : 'organization.name, organization.district, organization.logo_url';
    let tables = id ? 'organization' : 'organization';
    let selectors = id ? `where id = ${id}` : '';
    let query = `select ${fields} from ${tables} ${selectors}`;
    db.query(query, cb);
  },
  
  getOrgUsers(id, cb) {
    // make option for more detail on user?
    let fields = `"user".first_name, "user".last_name, "user".email, "user".phone, user_type.name, notifiication_type.type`;
    let tables = `"user"`;
    let selectors = `INNER JOIN user_type ON "user".user_type_id = user_type.id
                    INNER JOIN notifiication_type ON "user".notification_type_id = notifiication_type.id`;
    if (id !== null) {
      selectors += ` WHERE "user".id = ${id}`; 
    }
    let query = `SELECT (${fields}) FROM ${tables} ${selectors}`;
    db.query(query, cb);
  }
}