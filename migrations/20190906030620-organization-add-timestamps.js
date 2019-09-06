'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'organization',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'organization',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('organization', 'created_at');
    await queryInterface.removeColumn('organization', 'updated_at');
  },
};
