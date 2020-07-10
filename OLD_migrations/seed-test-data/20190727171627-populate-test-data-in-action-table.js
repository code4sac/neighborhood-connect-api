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
  return db.insert('action', 
                  ['id', 'action_type_id',               'description',                  'timestamp', 'visibility', 'priority_id', 'user_id',                        'title'], 
                  [   1,                1, 'a much longer description', '2019-07-20 21:21:06.440707',         true,             1,         2, 'city to conduct clean-up day']
    )
   .then(db.insert('action', 
                  ['id', 'action_type_id',                                           'description',                  'timestamp', 'visibility', 'priority_id', 'user_id',                                'title'], 
                  [   2,                1, 'a WAY longer description.............................', '2019-07-20 21:21:06.460614',         true,             1,         3, 'clean-up day completed successfully!']
    ))
    .then(db.insert('action', 
                  ['id', 'action_type_id', 'description',                  'timestamp', 'visibility', 'priority_id', 'user_id',           'title'], 
                  [   3,                1,        'test', '2019-07-21 23:06:10.237091',         true,             2,         1, 'This is a title']
    ))
   ;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
