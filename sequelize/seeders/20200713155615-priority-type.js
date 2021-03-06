'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('priority_type', [
      {
          name: 'Animals'
      },
      {
          name: 'City Parks'
      },
      {
          name: 'Code Violation and Graffiti'
      },
      {
          name: 'Garbage and Illegal Dumping'
      },
      {
          name: 'Streets and Lighting'
      },
      {
          name: 'Vehicle Complaints'
      },
      {
          name: 'Water, Sewer, and Drains'
      },
      {
          name: 'Homelessness'
      }
   ], {});
 },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('priority_type', null, {});
  }
};
