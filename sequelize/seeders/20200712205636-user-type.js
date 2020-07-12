'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('user_type', [
       {
          name: 'Leader'
       },
       {
        name: 'Admin'
       },
       {
        name: 'Staff'
       },
       {
        name: 'Department'
       }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('user_type', null, {});

  }

};
