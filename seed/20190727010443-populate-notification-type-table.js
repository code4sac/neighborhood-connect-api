'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notification_type', [{
      name: 'Email',
    },
    {
      name: 'Both',
    },
    {
      name: 'SMS',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notification_type', null, {});
  },
};
