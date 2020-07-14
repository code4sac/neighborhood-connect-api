'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('action_type', [
      {
          name: 'comment'
      }
   ], {});
 },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('action_type', null, {});
  }
};
