'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_type', [{
      name: 'Leader',
    },
    {
      name: 'Admin',
    },
    {
      name: 'Staff',
    },
    {
      name: 'Department',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_type', null, {});
  },
};

