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
  return db.insert('organization', 
                 ['id', 'organization_type_id',                                         'name', 'description', 'district', 'logo_url', 'map_url',                                'website_url',                          'mailing_address',                                                                'meeting_location'], 
                 [   2,                      1, 'Avondale Glen Elder Neighborhood Association',            '',        '6',       null,      null, 'https://www.facebook.com/avondaleglenelder', '7805 Vallecitos Way Sacramento, CA 95828', 'George Sim Community Center 6207 Logan Street Sacramento, CA 95824 916-808-3761']
                 )
   .then(db.insert('organization', 
                 ['id', 'organization_type_id',                                         'name', 'description', 'district', 'logo_url', 'map_url', 'website_url',                          'mailing_address',                                                'meeting_location'], 
                 [   3,                      1,                'Ben Ali Community Association',            '',        '2',       null,      null,          null, '1725 Frienza Avenue Sacramento, CA 95815', 'Higher Learning Academy 2625 Plover Street Sacramento, CA 95815']
    ))
   .then(db.insert('organization', 
                 ['id', 'organization_type_id',                                         'name', 'description', 'district',    'logo_url',     'map_url', 'website_url',                   'mailing_address',                                                'meeting_location'], 
                 [   4,                      1,                                      'Midtown', 'hip happenin',       '5', 'www.123.com', 'www.456.com', 'www.678.com', '555 davis road',                                                                   '789 balzak place']
    ))
   .then(db.insert('organization', 
                 ['id', 'organization_type_id',                                                       'name', 'description', 'district',    'logo_url',     'map_url',                    'website_url',                    'mailing_address',                                                  'meeting_location'], 
                 [   1,                      1, 'Alkali and Mansion Flats Historic Neighborhood Association',            '',        '4',          null,          null, 'http://alkalimansionflats.org/', '1326 E Street Sacramento, CA 95814', 'Boys and Girls Club of America 1117 G Street Sacramento, CA 95814']
    ))
   ;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
