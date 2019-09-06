'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'user',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'user',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user', 'created_at');
    await queryInterface.removeColumn('user', 'updated_at');
  },
};
