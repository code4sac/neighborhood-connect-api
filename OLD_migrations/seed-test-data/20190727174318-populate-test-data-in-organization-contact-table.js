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
  return db.insert('organization_contact', 
                 ['id', 'user_id', 'organization_id'], 
                 [   1,         4,                 2]
                 )
   .then(db.insert('organization_contact', 
                ['id', 'user_id', 'organization_id'], 
                [   2,         5,                 3]
                 ))
   .then(db.insert('organization_contact', 
                ['id', 'user_id', 'organization_id'], 
                [   3,         1,                 1]
                 ))
   ;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
