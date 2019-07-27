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
  return db.createTable('organization_owner', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true 
    },
    user_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'user',
        mapping: 'id',
        name: 'organization_owner_user_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    organization_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'organization',
        mapping: 'id',
        name: 'organization_owner_organization_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },

  });
};

exports.down = function(db) {
  return db.dropTable('organization_owner', { ifExists:true } );
};

exports._meta = {
  "version": 1
};
