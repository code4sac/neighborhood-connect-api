
const headers = 'id,priority_type_id,description,visibility,priority_status_type_id,organization_id,rank,user_id';

const rand = (int) => Math.floor(Math.random() * int) + 1;

/**
 * @param {Object} dbClient database connection object
 * @return {Promise}
 */
function createPriorityTable(dbClient) {
  return dbClient.query(`CREATE TABLE IF NOT EXISTS priorities (
    id SERIAL PRIMARY KEY,
    priority_type_id INTEGER REFERENCES priority_type(id),
    description VARCHAR(240),
    visibility BOOLEAN,
    priority_status_type_id INTEGER REFERENCES priority_status_type(id),
    organization_id INTEGER REFERENCES organization(id),
    rank INTEGER,
    user_id INTEGER REFERENCES "user"(id)
  )`).then(() => {
    console.log('Priority table ready');
  }).catch((err) => {
    console.log('error creating priority table');
    console.log(err);
  });
}

/**
 * @param {Object} dbClient database connection object
 * @param {String} row values to insert
 * @return {Promise}
 */
function seedPriority(dbClient, row) {
  const values = row.split('\t');

  return dbClient.query(`
    INSERT INTO priority (${headers}) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    ON CONFLICT (id)
    DO UPDATE SET
      priority_type_id = $2,
      description = $3,
      visibility = $4,
      priority_status_type_id = $5,
      organization_id = $6,
      rank = $7,
      user_id = $8`, values);
}

/**
 * @param {Int} orgId
 * @param {Int} userId
 * @return {String}
 */
function generatePriorityRows(orgId, userId) {
  let result = '';

  if (orgId === 0) return '';
  const seen = [];
  while (seen.length < 5) {
    const int = rand(8);
    if (!seen.includes(int)) {
      seen.push(int);
    }
  }
  const titles = [
    'Strays near Main Street',
    'Playground Remodeling',
    'Graffiti on Corner of X and Y',
    'Trash Heap at Highway 555 Overpass',
    'Pot Holes on ABC Parkway',
    'Parking Permits for EX Road',
    'Stormdrain Flooding',
    'Encampment at School Park Z',
  ];
  for (let i = 0; i < 5; i++) {
    const row = [
      seen[i],
      titles[seen[i] - 1],
      true,
      rand(4),
      orgId,
      i + 1,
      userId,
    ];
    result+=(row.join('\t') + '\n');
  }
  return result;
}


module.exports = {
  createPriorityTable,
  seedPriority,
  generatePriorityRows,
};


