/* eslint-disable max-len */

const fs = require('fs');
const es = require('event-stream');
const path = require('path');
const pg = require('pg');
const streamHandler = require('./stream');
const config = require('../server/model/config');
const {seedOrg, createOrganizationTable, generateOrgRow} = require('./organization.js');
const {seedUser, createUserTable, generateUserRow} = require('./users.js');
const {seedContact, createContactTable, generateContactRow} = require('./contacts.js');
const {seedPriority, createPriorityTable, generatePriorityRows} = require('./priorities.js');
const {seedAction, createActionTable, generateActionRows} = require('./actions.js');
const client = new pg.Client(config);
client.connect();
client.query(`SET search_path TO seed_test`);

console.clear();

console.log('connected to database');

const writeOrgs = fs.createWriteStream(path.join(__dirname, './resources/Orgs.tsv'));
const writeUsers = fs.createWriteStream(path.join(__dirname, './resources/Users.tsv'));
const writeContacts = fs.createWriteStream(path.join(__dirname, './resources/Contacts.tsv'));
const writePriorities = fs.createWriteStream(path.join(__dirname, './resources/Priorities.tsv'));
// actions

let orgId = 0;
let userId = 0;

const read = fs.createReadStream(path.join(__dirname, './resources/NeighborhoodAssociations.tsv'));

read.pipe(es.split())
    .pipe(es.mapSync((row) => {
      const values = row.split('\t');
      writeOrgs.write(generateOrgRow(values, orgId, 1));
      if (values[4].length > 0 && orgId > 1) {
        writeUsers.write(generateUserRow(values, orgId, ++userId));
        writeContacts.write(generateContactRow(orgId, userId));
        writePriorities.write(generatePriorityRows(orgId, userId));
      }
      orgId++;
    }));

read.on('close', () => {
  console.log('.tsv files written');
  console.log('Seeding db...');
  createOrganizationTable(client).then(() => {
    const stream = streamHandler(client, './resources/Orgs.tsv', seedOrg, 'org');
    stream.on('close', () => {
      console.log('Organizations seeding');
      createUserTable(client).then(() => {
        const stream = streamHandler(client, './resources/Users.tsv', seedUser, 'user');
        stream.on('close', () => {
          console.log('Users seeding');
          createContactTable(client).then(() => {
            const stream = streamHandler(client, './resources/Contacts.tsv', seedContact, 'contact');
            stream.on('close', () => {
              console.log('Organization Contacts seeding');
              createPriorityTable(client).then(() => {
                const stream = streamHandler(client, './resources/Priorities.tsv', seedPriority, 'priority');
                stream.on('close', () => {
                  console.log('Priorities seeding');
                  createActionTable(client).then(() => {
                    // fill me in
                    // const stream = streamHandler(client, './resources/Actions.tsv', seedAction, 'action');
                    // stream.on('close', () => {
                    console.log('Actions seeded \n Seeding complete');
                    process.exit(0);
                    // });
                  }).catch((err) => {
                    console.log('Unable to create Action table');
                    console.error(err);
                    process.exit(1);
                  });
                });
              }).catch((err) => {
                console.log('Unable to create Priority table');
                console.error(err);
                process.exit(1);
              });
            });
          }).catch((err) => {
            console.log('Unable to create Contact table');
            console.error(err);
            process.exit(1);
          });
        });
      }).catch((err) => {
        console.log('Unable to create User table');
        console.error(err);
        process.exit(1);
      });
    });
  }).catch((err) => {
    console.log('unable to create Organization table');
    console.error(err);
    process.exit(1);
  });
});

