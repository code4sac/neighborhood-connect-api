'use strict';


const getUserIdByEmail = async function(queryInterface, email){
  console.log('getUserIdByEmail');
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from public.user WHERE email = '${email}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
}  

const getOrganizationIdByName= async function(queryInterface, name){
  console.log('getOrganizationIdByName');
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from organization WHERE name = '${name}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
}    

const getPriorityTypeIdByName = async function(queryInterface, name){
  console.log('getPriorityTypeIdByName');
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from priority_type WHERE name = '${name}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
} 

const getPriorityStatusIdByName = async function(queryInterface, name){
  console.log('getPriorityStatusIdByName');
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from priority_status_type WHERE name = '${name}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
} 



module.exports = {
  up: async (queryInterface, Sequelize) => {

    const orgId1  = await getOrganizationIdByName(queryInterface, 'Ben Ali Community Association');
    const userId1 = await getUserIdByEmail(queryInterface, 'testemail1@test.com');
    const typeId1 = await getPriorityTypeIdByName(queryInterface, 'Streets and Lighting');
    const statId1 = await getPriorityStatusIdByName(queryInterface, 'Pending');

    const orgId2  = await getOrganizationIdByName(queryInterface, 'Ben Ali Community Association');
    const userId2 = await getUserIdByEmail(queryInterface, 'testemail2@test.com');
    const typeId2 = await getPriorityTypeIdByName(queryInterface, 'Code Violation and Graffiti');
    const statId2 = await getPriorityStatusIdByName(queryInterface, 'Working');

    const orgId3  = await getOrganizationIdByName(queryInterface, 'Ben Ali Community Association');
    const userId3 = await getUserIdByEmail(queryInterface, 'testemail1@test.com');
    const typeId3 = await getPriorityTypeIdByName(queryInterface, 'Garbage and Illegal Dumping');
    const statId3 = await getPriorityStatusIdByName(queryInterface, 'Working');

    const orgId4  = await getOrganizationIdByName(queryInterface, 'Ben Ali Community Association');
    const userId4 = await getUserIdByEmail(queryInterface, 'testemail2@test.com');
    const typeId4 = await getPriorityTypeIdByName(queryInterface, 'Vehicle Complaints');
    const statId4 = await getPriorityStatusIdByName(queryInterface, 'Resolved');


    await queryInterface.bulkInsert('priority', [
      {
        description: 'Test Priority #1',
        rank: 1,
        visibility: true, 
        priority_type_id: typeId1,
        priority_status_type_id: statId1,
        organization_id: orgId1,
        user_id: userId1
      },
      {
        description: 'Test Priority #2',
        rank: 2,
        visibility: true, 
        priority_type_id: typeId2,
        priority_status_type_id: statId2,
        organization_id: orgId2,
        user_id: userId2
      },
      {
        description: 'Test Priority #3',
        rank: 2,
        visibility: false, 
        priority_type_id: typeId3,
        priority_status_type_id: statId3,
        organization_id: orgId3,
        user_id: userId3
      },
      {
        description: 'Test Priority #4',
        rank: 2,
        visibility: true, 
        priority_type_id: typeId4,
        priority_status_type_id: statId4,
        organization_id: orgId4,
        user_id: userId4
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('priority', null, {});
  }
};
