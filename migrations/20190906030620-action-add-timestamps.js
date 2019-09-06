'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'action',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'action',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('action', 'created_at');
    await queryInterface.removeColumn('action', 'updated_at');
  },
};
