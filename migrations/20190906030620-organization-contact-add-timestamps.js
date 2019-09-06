'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'organization_contact',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'organization_contact',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('organization_contact', 'created_at');
    await queryInterface.removeColumn('organization_contact', 'updated_at');
  },
};
