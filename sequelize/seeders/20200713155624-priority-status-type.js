'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('priority_status_type', [
      {
          name: 'Pending'
      },
      {
          name: 'Accepted'
      },
      {
          name: 'Rejected'
      },
      {
          name: 'Working'
      },
      {
          name: 'Resolved'
      }
   ], {});
 },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('priority_status_type', null, {});
  }

};
