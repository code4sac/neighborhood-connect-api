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
  return db.createTable('resource', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true 
    },
    name: {
      notNull: true,
      type: 'string',
    },
    description: {
      notNull: true,
      type: 'string',
    },
    link: {
      notNull: false,
      type: 'string',
    },
    user_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'user',
        mapping: 'id',
        name: 'resource_user_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },
    resource_type_id : {
      type: 'int',
      notNull: true,
      foreignKey: {
        table: 'resource_type',
        mapping: 'id',
        name: 'resource_type_id_fk',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    },

  });
};

exports.down = function(db) {
  return db.dropTable('resource', { ifExists:true } );
};

exports._meta = {
  "version": 1
};
