
'use strict';
const {Client} = require('pg');

const client = new Client({
  user: 'username',
  host: 'localhost',
  database: 'nc',
  password: 'password',
  port: 5432,
});

const checkAndMigrateLegacy = async () => {
  await client.connect();

  // eslint-disable-next-line no-multi-str
  const sequelizeMigrationCheck = await client.query('SELECT EXISTS ( \
    SELECT 1 \
    FROM   information_schema.tables \
    WHERE  table_schema = \'public\' \
    AND    table_name = \'SequelizeMeta\' \
    );');
  const sequelizeTableExists = sequelizeMigrationCheck.rows[0].exists;

  // eslint-disable-next-line no-multi-str
  const legacyMigrationCheck = await client.query('SELECT EXISTS ( \
    SELECT 1 \
    FROM   information_schema.tables \
    WHERE  table_schema = \'public\' \
    AND    table_name = \'migrations\' \
    );');
  const legacyTableExists = legacyMigrationCheck.rows[0].exists;

  if (legacyTableExists) {
    if (!sequelizeTableExists) {
      await client.query(
          'CREATE TABLE "SequelizeMeta"(name VARCHAR(255) PRIMARY KEY)'
      );
    }

    const migrations = await client.query('SELECT * FROM migrations');
    await migrations.rows
        .filter((row) => row.name.startsWith('/'))
        .reduce(async (lastPromise, row) => {
          await lastPromise;
          return client.query({
            text: `INSERT INTO "SequelizeMeta"(name) VALUES($1)`,
            values: [row.name.slice(1)],
          });
        }, Promise.resolve());

    await client.query('ALTER TABLE migrations RENAME TO legacy_migrations;');
    await client.end();
  }

  process.exit(0);
};

checkAndMigrateLegacy();
