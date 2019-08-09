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
  return db.insert('priority', 
                  ['id', 'priority_type_id',                           'description', 'visibility', 'priority_status_type_id', 'organization_id', 'rank', 'user_id'], 
                  [   1,                  4, 'a description of some illegal dumping',         true,                         1,                 2,      1,          1]
    )
   .then(db.insert('priority', 
                  ['id', 'priority_type_id',                   'description', 'visibility', 'priority_status_type_id', 'organization_id', 'rank', 'user_id'], 
                  [   2,                  8, 'Some issues with homelessness',         true,                         4,                 1,      1,         2]
    ))
    .then(db.insert('priority', 
                  ['id', 'priority_type_id',           'description', 'visibility', 'priority_status_type_id', 'organization_id', 'rank', 'user_id'], 
                  [   3,                  3, 'graffiti EVERYWHERE!!',         true,                         2,                 3,      1,         3]
    ))
   ;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
