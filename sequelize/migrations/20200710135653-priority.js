'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('priority', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      visibility: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      rank: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      priority_type_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'priority_type',
            schema: 'public'
          },
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      priority_status_type_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'priority_status_type',
            schema: 'public'
          },
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      organization_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'organization',
            schema: 'public'
          },
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      user_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'user',
            schema: 'public'
          },
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('priority');
  }
};