const { Client } = require('pg')
const config = require('./db.config.js');
const client = new Client(config)
client.connect();

module.exports = client;