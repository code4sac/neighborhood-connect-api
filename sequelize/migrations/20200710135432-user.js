'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },

      user_type_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'user_type',
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

      notification_type_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'notification_type',
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
    await queryInterface.dropTable('user');
  }
};