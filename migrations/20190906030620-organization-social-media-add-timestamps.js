'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'organization_social_media',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'organization_social_media',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
        'organization_social_media',
        'created_at'
    );
    await queryInterface.removeColumn(
        'organization_social_media',
        'updated_at'
    );
  },
};
