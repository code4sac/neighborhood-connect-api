'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.insert('priority_type', ['name'],['Animals'])
   .then(db.insert('priority_type', ['name'],['City Parks']))
   .then(db.insert('priority_type', ['name'],['Code Violation and Graffiti']))
   .then(db.insert('priority_type', ['name'],['Garbage and Illegal Dumping']))
   .then(db.insert('priority_type', ['name'],['Streets and Lighting']))
   .then(db.insert('priority_type', ['name'],['Vehicle Complaints']))
   .then(db.insert('priority_type', ['name'],['Water, Sewer, and Drains']))
   .then(db.insert('priority_type', ['name'],['Homelessness']))
   ;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
