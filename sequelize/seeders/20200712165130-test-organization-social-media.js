'use strict';

const getOrganizationIdByName = async function(queryInterface, name){
  const organizationResults = await queryInterface.sequelize.query(
    `SELECT id from organization WHERE name = '${name}';`
  );
  const organizations = organizationResults[0];
  const orgID = organizations[0].id;
  return orgID; 
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const orgID = await getOrganizationIdByName(queryInterface, 'Ben Ali Community Association');
    await queryInterface.bulkInsert('organization_social_media', [
      {
        organization_id : orgID, 
        type: 'TEST_PLATFORM',
        url: 'http://www.testurl.com'
      },
      {
        organization_id : orgID, 
        type: 'TEST_PLATFORM_2',
        url: 'http://www.testurl_2.com'
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('organization_social_media', null, {});
  }
};
