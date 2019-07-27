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
  return db.insert('user_type', ['name'],['Leader'])
   .then(db.insert('user_type', ['name'],['Admin']))
   .then(db.insert('user_type', ['name'],['Staff']))
   .then(db.insert('user_type', ['name'],['Department']))
   ;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
