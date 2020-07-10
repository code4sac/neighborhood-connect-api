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
  return db.insert('priority_status_type', ['name'],['Pending'])
   .then(db.insert('priority_status_type', ['name'],['Accepted']))
   .then(db.insert('priority_status_type', ['name'],['Rejected']))
   .then(db.insert('priority_status_type', ['name'],['Working']))
   .then(db.insert('priority_status_type', ['name'],['Resolved']));
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
