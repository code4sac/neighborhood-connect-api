const db = require('./db');

module.exports = {
  // INNER JOIN to:
  // --> org type
  // --> contact
  // --> owner
  async getOrg(id) {
    // needs type
    let fields = id ? '*' : 'organization.name, organization.district, organization.logo_url';
    let tables = id ? 'organization' : 'organization';
    let selectors = id ? `where id = ${id}` : '';
    return db.query(`select ${fields} from ${tables} ${selectors}`);
  },
  
  async getOrgUsers(id) {
    // make option for more detail on user?
    let fields = `"user".first_name, "user".last_name, "user".email, "user".phone, user_type.name, notifiication_type.type`;
    let tables = `"user"`;
    let selectors = `INNER JOIN user_type ON "user".user_type_id = user_type.id
                    INNER JOIN notifiication_type ON "user".notification_type_id = notifiication_type.id`;
    if (id !== undefined) {
      selectors += ` WHERE "user".id = ${id}`; 
    }
    return db.query(`SELECT (${fields}) FROM ${tables} ${selectors}`);
  },
  // -> check if name already exists
  async postOrg(body) {
    let fields = [];
    let values = [];

    Object.keys(body).forEach(field => {
      if (typeof field === 'string') fields.push(field);
      else throw Error('Invalid column');
      if (typeof body[field] === 'string') values.push(`'${body[field]}'`)
      else values.push(body[field])
    })

    return db.query(`INSERT INTO organization (${fields.join(', ')}) VALUES (${values.join(', ')})`)

  },
}