'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'resource_type',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'resource_type',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('resource_type', 'created_at');
    await queryInterface.removeColumn('resource_type', 'updated_at');
  },
};
