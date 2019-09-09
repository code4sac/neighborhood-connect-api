'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('action', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      action_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'action_type',
          key: 'id',
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      visibility: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      priority_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'priority',
          key: 'id',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('action');
  },
};
