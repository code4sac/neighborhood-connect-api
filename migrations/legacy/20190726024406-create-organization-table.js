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
  return db.createTable('organization', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true 
    },
    organization_type_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'organization_type',
        mapping: 'id',
        name: 'organization_type_organization_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    name: {
      notNull: true,
      type: 'string',
    },
    description: {
      notNull: true,
      type: 'string',
    },
    district: {
      notNull: true,
      type: 'string',
    },
    logo_url: {
      type: 'string',
    },
    map_url: {
      type: 'string',
    },
    website_url: {
      type: 'string',
    },
    mailing_address: {
      type: 'string',
    },
    meeting_location: {
      type: 'string',
    }
  });
};

exports.down = function(db) {
  return db.dropTable('organization', { ifExists:true } );
};

exports._meta = {
  "version": 1
};
