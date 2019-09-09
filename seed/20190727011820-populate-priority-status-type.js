'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('priority_status_type', [{
      name: 'Pending',
    },
    {
      name: 'Accepted',
    },
    {
      name: 'Rejected',
    },
    {
      name: 'Working',
    },
    {
      name: 'Resolved',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('priority_status_type', null, {});
  },
};
