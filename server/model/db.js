const {Client} = require('pg');
const config = require('./config.js');
const client = new Client(config);

client.query(`set search_path to 'public'`);
client.connect();

module.exports = client;
