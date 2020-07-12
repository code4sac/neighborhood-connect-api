'use strict';

const getUserTypeIdByName = async function(queryInterface, name){
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from user_type WHERE name = '${name}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
}  

const getOrganizationIdByName= async function(queryInterface, name){
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from organization WHERE name = '${name}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
}    

const getNotificationTypeByName = async function(queryInterface, name){
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from notification_type WHERE name = '${name}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
} 


module.exports = {

  up: async (queryInterface, Sequelize) => {

    const userTypeID1 = await getUserTypeIdByName(queryInterface,    'Admin');
    const userOrgID1  = await getOrganizationIdByName(queryInterface, 'Ben Ali Community Association');
    const notifyID1   = await getNotificationTypeByName(queryInterface, 'Email');

    const userTypeID2 = await getUserTypeIdByName(queryInterface,    'Staff');
    const userOrgID2  = await getOrganizationIdByName(queryInterface, 'Ben Ali Community Association');
    const notifyID2   = await getNotificationTypeByName(queryInterface, 'SMS');

     await queryInterface.bulkInsert('user', [
        { 
          password: 'password',
          first_name: 'TestFirstName1',
          last_name: 'TestLastName1',
          phone: '5555555555',
          email: 'testemail1@test.com',
          user_type_id: userTypeID1,
          organization_id: userOrgID1,
          notification_type_id : notifyID1
        },
        { 
          password: 'password',
          first_name: 'TestFirstName2',
          last_name: 'TestLastName2',
          phone: '5555555555',
          email: 'testemail2@test.com',
          user_type_id: userTypeID2,
          organization_id: userOrgID2,
          notification_type_id : notifyID2
        }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  }

};
