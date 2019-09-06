'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'resource',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'resource',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('resource', 'created_at');
    await queryInterface.removeColumn('resource', 'updated_at');
  },
};
