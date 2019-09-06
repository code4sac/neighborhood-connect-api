'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'organization_owner',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'organization_owner',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('organization_owner', 'created_at');
    await queryInterface.removeColumn('organization_owner', 'updated_at');
  },
};
