'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'priority',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'priority',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('priority', 'created_at');
    await queryInterface.removeColumn('priority', 'updated_at');
  },
};
