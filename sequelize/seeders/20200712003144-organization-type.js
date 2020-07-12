'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('organization_type', [
       {
          name: 'Neighborhood Association'
       },
       {
        name: 'PBID'
       },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('organization_type', null, {});

  }

};
