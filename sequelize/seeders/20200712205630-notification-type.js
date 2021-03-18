'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('notification_type', [
       {
          name: 'Email'
       },
       {
          name: 'Both'
       },
       {
          name: 'SMS'
       }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('notification_type', null, {});
  }

};