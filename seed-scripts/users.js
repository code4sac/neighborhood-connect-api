const faker = require('faker');
const headers = 'id,password,first_name,last_name,user_type_id,phone,email,organization_id,notification_type_id';

const rand = (int) => Math.floor(Math.random() * int) + 1;


/**
 * @param {Object} dbClient database connection object
 * @return {Promise}
 */
function createUserTable(dbClient) {
  return dbClient.query(`CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    password VARCHAR(80),
    first_name VARCHAR(80) NOT NULL,
    last_name VARCHAR(80),
    user_type_id INTEGER NOT NULL,
    phone VARCHAR(160),
    email VARCHAR(160),
    organization_id INTEGER,
    notification_type_id INTEGER
  )`).then(() => {
    console.log('User table ready');
  });
}

/**
 * @param {Object} dbClient database connection object
 * @param {String} row values to insert
 * @return {Promise}
 */
function seedUser(dbClient, row) {
  const values = row.split('\t');

  return dbClient.query(`
    INSERT INTO "user" (${headers}) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    ON CONFLICT (id)
    DO UPDATE SET
      password = $2,
      first_name = $3,
      last_name = $4,
      user_type_id = $5,
      phone = $6,
      email = $7,
      organization_id = $8,
      notification_type_id = $9`, values);
}

/**
 *
 * @param {Array} values
 * @param {Int} orgId
 * @param {Int} userId
 * @return {String}
 */
function generateUserRow(values, orgId, userId) {
  if (orgId === 0) return '';
  const [first, last] = values[4].split(' ');
  const email = values[5];
  const phone = values[6];


  const row = [
    userId,
    faker.random.alphaNumeric(10),
    first,
    last,
    rand(4),
    phone,
    email,
    orgId,
    rand(3),
  ];
  return row.join('\t') + '\n';
}


module.exports = {
  createUserTable,
  seedUser,
  generateUserRow,
};

