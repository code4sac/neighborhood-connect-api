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
  return db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',                        'email', 'organization_id', 'notification_type_id'], 
                  [   2,   'abc123',   'Kriztina',    'Palone',              2, '1112223333', 'kpalone@cityofsacramento.org',                 2,                      1]
    )
   .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',                          'email', 'organization_id', 'notification_type_id'], 
                  [   3,   'abc123',        'Ash', 'Roughani',               3, '9998887777', 'aroughani@cityofsacramento.org',                 3,                       1]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',               'email', 'organization_id', 'notification_type_id'], 
                  [   4,   'abc123',   'Harrison',     'McCey',              1, '5556667777', 'harrison@mccey.com',                  2,                      1]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',          'email', 'organization_id', 'notification_type_id'], 
                  [   5,   'abc123',   'Jonathan',    'Throne',              1, '6667778888', 'jon@throne.com',                 3,                      1]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',                        'email', 'organization_id', 'notification_type_id'], 
                  [   1,   'abc123',       'Earl',    'Damron',              1, '4156081374',             'e@earldamron.com',                 1,                      3]
    ))
    .then(db.insert('user', 
                  ['id',    'password', 'first_name', 'last_name', 'user_type_id',      'phone',         'email', 'organization_id', 'notification_type_id'], 
                  [   7, 'supersecret',      'Pablo', 'Francisco',              1, '1231231234', 'wow@gmail.com',                 1,                      1]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',          'email', 'organization_id', 'notification_type_id'], 
                  [   8,   'abc123',       'Fred',     'Smith',              1, '7776668888', 'fred@smith.com',                 1,                      1]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',         'email', 'organization_id', 'notification_type_id'], 
                  [   9,   'abc123',       'Jane',        'Doe',             1, '7778886666', 'jane@does.com',                 2,                     1 ]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',                         'email', 'organization_id', 'notification_type_id'], 
                  [   14,   'abc11',      'Joana',    'Palone',              2, '1112223333', 'kpalone@cityofsacramento.orgs',                 2,                      1]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',                          'email', 'organization_id', 'notification_type_id'], 
                  [  17,    'abc11',      'Joana',    'Palone',              2, '1112223333', 'kpalone@cityofsacramento.orgss',                 2,                      1]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',                           'email', 'organization_id', 'notification_type_id'], 
                  [  18,    'abc11',      'Joana',    'Palone',              2, '1112223333', 'kpalone@cityofsacramento.orgsss',                 2,                      1]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',                                      'email', 'organization_id', 'notification_type_id'], 
                  [  29,    'abc11',      'TestD',      'Test',              2, '1112223333', 'kpalone@cityofsacramento.orgssssssssssssss',                 2,                      1]
    ))
    .then(db.insert('user', 
                  ['id', 'password', 'first_name', 'last_name', 'user_type_id',      'phone',                                        'email', 'organization_id', 'notification_type_id'], 
                  [  30,    'abc11',      'TestE',      'Test',              2, '1112223333', 'kpalone@cityofsacramento.orgssssssssssssssss',                 2,                      1]
    ))
   ;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
