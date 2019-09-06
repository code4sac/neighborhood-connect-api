'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'organization_type',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'organization_type',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('organization_type', 'created_at');
    await queryInterface.removeColumn('organization_type', 'updated_at');
  },
};
