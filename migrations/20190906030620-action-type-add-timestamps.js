'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'action_type',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'action_type',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('action_type', 'created_at');
    await queryInterface.removeColumn('action_type', 'updated_at');
  },
};
