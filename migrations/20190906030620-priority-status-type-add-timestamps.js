'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'priority_status_type',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'priority_status_type',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('priority_status_type', 'created_at');
    await queryInterface.removeColumn('priority_status_type', 'updated_at');
  },
};
