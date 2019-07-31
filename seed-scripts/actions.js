
const faker = require('faker');
const headers = 'id,action_type_id,title,description,timestamp,visibility,priority_id,user_id';

const randomIndex = (int) => Math.floor(Math.random() * int);

const randomDate = () => {
  // 8.64e7 ms per day
  let now = new Date();
  // set to midnight
  now -= now % 8.64e7;
  // set to 6:30;
  now += 6.66e7;
  const days = rand(120) - 30;
  return new Date(now - (days * 8.64e7));
};

/**
 * @param {Object} dbClient database connection object
 * @return {Promise}
 */
function createActionTable(dbClient) {
  return dbClient.query(`CREATE TABLE IF NOT EXISTS action (
    id SERIAL PRIMARY KEY,
    action_type_id INTEGER REFERENCES action_type(id),
    title VARCHAR(80) NOT NULL,
    description VARCHAR(280),
    timestamp TIMESTAMP,
    visibility BOOL,
    priority_id INTEGER REFERENCES priority(id),
    user_id INTEGER REFERENCES "user"(id)
  )`).then(() => {
    console.log('Action table ready');
  });
}

/**
 * @param {Object} dbClient database connection object
 * @param {String} row values to insert
 * @return {Promise}
 */
function seedAction(dbClient, row) {
  const values = row.split('\t');

  return dbClient.query(`
    INSERT INTO action (${headers}) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    ON CONFLICT (id)
    DO UPDATE SET
      action_type_id = $2,
      title = $3,
      description = $4,
      timestamp = $5,
      visibility = $6,
      priority_id = $7,
      user_id = $8`, values);
}

/**
 * @param {Int} priorityId
 * @param {Int} userId
 * @return {String}
 */
function generateActionRows(priorityId, userId) {
  if (orgId === 0) return '';

  const events = [
    'Planning Session',
    'Townhall',
    'Awesome Event',
  ];

  const row = [
    2,
    events[randomIndex(3)],
    faker.lorem.sentences(2),
    randomDate(),
    true,
    priorityId,
    userId,
  ];
  return row.join('\t') + '\n';
}


module.exports = {
  createActionTable,
  seedAction,
  generateActionRows,
};

