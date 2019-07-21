const { Client } = require('pg');
const config = require('./config.js');
const client = new Client(config);
client.connect();

module.exports = client;