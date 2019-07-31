
/**
 * @param {Object} dbClient database connection object
 * @return {Promise}
 */
function createContactTable(dbClient) {
  return dbClient.query(`CREATE TABLE IF NOT EXISTS "organization_contact" (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "user"(id),
    organization_id INTEGER REFERENCES organization(id)
  )`).then(() => {
    console.log('Contact table ready');
  });
}

/**
 * @param {Object} dbClient database connection object
 * @param {String} row tsv row
 * @return {Promise}
 */
function seedContact(dbClient, row) {
  const values = row.split('\t');
  return dbClient.query('INSERT INTO "organization_contact" (user_id, organization_id) VALUES ($1,$2)', values);
}

/**
 * @param {Int} orgId
 * @param {Int} userId
 * @return {String}
 */
function generateContactRow(orgId, userId) {
  if (orgId === 0) return '';
  const row = [
    userId,
    orgId,
  ];
  return row.join('\t') + '\n';
}


module.exports = {
  createContactTable,
  seedContact,
  generateContactRow,
};

