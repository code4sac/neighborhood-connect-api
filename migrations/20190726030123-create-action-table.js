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
  return db.createTable('action', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true 
    },
    action_type_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'action_type',
        mapping: 'id',
        name: 'action_action_type_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    description: {
      type: 'string'
    },
    timestamp: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('CURRENT_TIMESTAMP')
    },
    visibility : {
      type: 'boolean',
      notNull: true,
    },
    priority_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'priority',
        mapping: 'id',
        name: 'action_priority_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    user_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'user',
        mapping: 'id',
        name: 'action_user_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    title : {
      type: 'string'
    },

  });
};

exports.down = function(db) {
  return db.dropTable('action', { ifExists:true } );
};

exports._meta = {
  "version": 1
};
