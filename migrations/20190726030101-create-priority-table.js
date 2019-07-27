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
  return db.createTable('priority', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true 
    },
    priority_type_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'priority_type',
        mapping: 'id',
        name: 'priority_priority_type_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    description: {
      type: 'int',
      notNull: true
    },
    visibility: {
      type: 'boolean',
      notNull: true
    },
    priority_status_type_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'priority_status_type',
        mapping: 'id',
        name: 'priority_priority_status_type_id_fk',
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
        name: 'priority_organization_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    rank : {
      type: 'int',
      notNull: true,
    },
    user_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'priority',
        mapping: 'id',
        name: 'priority_user_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },

  });
};

exports.down = function(db) {
  return db.dropTable('priority', { ifExists:true } );
};

exports._meta = {
  "version": 1
};
