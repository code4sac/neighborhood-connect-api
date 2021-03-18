'use strict';

const getOrganizationIdByName= async function(queryInterface, name){
  console.log('getOrganizationIdByName');
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from organization WHERE name = '${name}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
}  

const getUserIdByEmail = async function(queryInterface, email){
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from public.user WHERE email = '${email}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
} 

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const userId1 = await getUserIdByEmail(queryInterface, 'testemail1@test.com');
    const orgId1  = await getOrganizationIdByName(queryInterface, 'Ben Ali Community Association');

    const userId2 = await getUserIdByEmail(queryInterface, 'testemail2@test.com');
    const orgId2  = await getOrganizationIdByName(queryInterface, 'Ben Ali Community Association');

     await queryInterface.bulkInsert('organization_contact', [
       {
          user_id: userId1,
          organization_id: orgId1
       },
       {
          user_id: userId2,
          organization_id: orgId2
       }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('organization_contact', null, {});
  }
};