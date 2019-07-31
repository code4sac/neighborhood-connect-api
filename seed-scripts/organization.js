const faker = require('faker');

const headers = 'id,organization_type_id,name,description,district,logo_url,map_url,website_url,mailing_address,meeting_location';


/**
 * @param {Object} dbClient database connection object
 * @return {Promise}
 */
function createOrganizationTable(dbClient) {
  return dbClient.query(`CREATE TABLE IF NOT EXISTS organization_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
  )`).then(() => {
    return dbClient.query(`INSERT INTO organization_type (name) VALUES ('neighborhood'),('PBID')`);
  }).then(() => {
    console.log('org_types created');
    return dbClient.query(`CREATE TABLE IF NOT EXISTS organization (
      id INTEGER PRIMARY KEY,
      organization_type_id INTEGER NOT NULL REFERENCES organization_type(id),
      name VARCHAR(80) NOT NULL,
      description VARCHAR(240),
      district VARCHAR(10) NOT NULL,
      logo_url VARCHAR(160),
      map_url VARCHAR(160),
      website_url VARCHAR(160),
      mailing_address VARCHAR(240),
      meeting_location VARCHAR(240)
    )`).then(() => {
      console.log('Organization table ready');
    });
  });
}

/**
 * @param {Object} dbClient database connection object
 * @param {String} row values to insert
 * @return {Promise}
 */
function seedOrg(dbClient, row) {
  const values = row.split('\t');

  return dbClient.query(`
    INSERT INTO organization (${headers}) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
    ON CONFLICT (id) 
    DO UPDATE SET
      organization_type_id = $2,
      name = $3,
      description = $4,
      district = $5,
      logo_url = $6,
      map_url = $7,
      website_url = $8,
      mailing_address = $9,
      meeting_location = $10`, values);
}

/**
 *
 * @param {Array} values
 * @param {Int} id
 * @param {Int} orgType neighborhood or PBID
 * @return {String}
 */
function generateOrgRow(values, id, orgType) {
  if (id === 0) return '';
  const [name, mailing, meeting, website] = values;
  const district = values[7];

  const row = [
    id,
    orgType,
    name,
    faker.lorem.sentences(2),
    district,
    'lorem.ipsum.com',
    'lorem.ipsum.com',
    website.length ? website : faker.internet.url(),
    mailing,
    meeting,
  ];

  return row.join('\t') + '\n';
}

module.exports = {
  createOrganizationTable,
  seedOrg,
  generateOrgRow,
};

