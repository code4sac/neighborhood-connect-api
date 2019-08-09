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
  return db.createTable('organization_social_media', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true 
    },
    organization_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'organization',
        mapping: 'id',
        name: 'organization_social_media_organization_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    type: {
      notNull: true,
      type: 'string',
    },
    url: {
      notNull: true,
      type: 'string',
    }
  });
};

exports.down = function(db) {
  return db.dropTable('organization_social_media', { ifExists:true } );
};

exports._meta = {
  "version": 1
};
