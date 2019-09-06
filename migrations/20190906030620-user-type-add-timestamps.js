'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'user_type',
        'created_at',
        Sequelize.DATE,
    );
    await queryInterface.addColumn(
        'user_type',
        'updated_at',
        Sequelize.DATE,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user_type', 'created_at');
    await queryInterface.removeColumn('user_type', 'updated_at');
  },
};
