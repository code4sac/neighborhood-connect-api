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
  return db.createTable('user', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true 
    },
    password: {
      type: 'string',
      notNull: true
    },
    first_name: {
      type: 'string',
      notNull: true
    },
    last_name: {
      type: 'string',
      notNull: true
    },
    user_type_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'user_type',
        mapping: 'id',
        name: 'user_user_type_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    phone: {
      type: 'string',
      notNull: true
    },
    email: {
      type: 'string',
      notNull: true
    },
    organization_id : {
      type: 'int',
      notNull: false,
      foreignKey: {
        table: 'organization',
        mapping: 'id',
        name: 'user_organization_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    notification_type_id : {
      type: 'int',
      defaultValue: 1,
      notNull: true,
      foreignKey: {
        table: 'notification_type',
        mapping: 'id',
        name: 'user_notification_type_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },

  });
};

exports.down = function(db) {
  return db.dropTable('user', { ifExists: true });
};

exports._meta = {
  "version": 1
};
