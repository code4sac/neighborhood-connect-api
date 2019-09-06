const config = require('../server/model/config');

module.exports = {
  database: config.database,
  username: config.user,
  password: config.password,
  host: config.host,
  port: config.port,
  dialect: 'postgres',
  define: {
    underscored: true,
  },
};
/*
module.exports = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  define: {
    underscored: true,
  },
}
*/
