'use strict';

const getOrganizationTypeIdByName = async function(queryInterface, courseName){
  const organizationResults = await queryInterface.sequelize.query(
    `SELECT id from organization_type WHERE name = '${courseName}';`
  );
  const organizations = organizationResults[0];
  const orgID = organizations[0].id;
  return orgID; 
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const orgTypePbidID = await getOrganizationTypeIdByName(queryInterface, 'PBID');
    const orgTypeNCID = await getOrganizationTypeIdByName(queryInterface, 'Neighborhood Association');

      await queryInterface.bulkInsert('organization', [
        {
          organization_type_id: orgTypePbidID, 
          name: 'Avondale Glen Elder Neighborhood Association',
          district: '6',
          description: '',
          mailing_address: '7805 Vallecitos Way Sacramento, CA 95828',
          meeting_location: 'George Sim Community Center 6207 Logan Street Sacramento, CA 95824 916-808-3761'
        },
        {
          organization_type_id: orgTypeNCID, 
          name: 'Ben Ali Community Association',
          district: '2',
          description: 'Test Description',
          mailing_address: '1725 Frienza Avenue Sacramento, CA 95815',
          meeting_location: 'Higher Learning Academy 2625 Plover Street Sacramento, CA 95815'
        }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('organization', null, {});
  }
};
