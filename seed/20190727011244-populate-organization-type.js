'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('organization_type', [{
      name: 'Neighborhood Association',
    },
    {
      name: 'PBID',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('organization_type', null, {});
  },
};
