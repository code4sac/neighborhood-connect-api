'use strict';

const getActionTypeIdByName = async function(queryInterface, name){
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from action_type WHERE name = '${name}';`
  );
  const record = recordResults[0];
  const ID = record[0].id;
  return ID; 
} 

const getPriorityIdByName = async function(queryInterface, name){
  const recordResults = await queryInterface.sequelize.query(
    `SELECT id from priority WHERE description = '${name}';`
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

    const userId1       = await getUserIdByEmail(queryInterface, 'testemail1@test.com');
    const actionTypeId1 = await getActionTypeIdByName(queryInterface, 'comment');
    const priorityId1   = await getPriorityIdByName(queryInterface, 'Test Priority #1');

    const userId2       = await getUserIdByEmail(queryInterface, 'testemail2@test.com');
    const actionTypeId2 = await getActionTypeIdByName(queryInterface, 'comment');
    const priorityId2   = await getPriorityIdByName(queryInterface, 'Test Priority #1');

    const userId3       = await getUserIdByEmail(queryInterface, 'testemail1@test.com');
    const actionTypeId3 = await getActionTypeIdByName(queryInterface, 'comment');
    const priorityId3   = await getPriorityIdByName(queryInterface, 'Test Priority #4');



    queryInterface.bulkInsert('action', [
      {
        description: 'Test Action #1',
        title: 'Test Action #1 Title',
        visibility: true, 
        action_type_id: actionTypeId1, 
        priority_id: priorityId1,
        user_id: userId1
      },
      {
        description: 'Test Action #2',
        title: 'Test Action #2 Title',
        visibility: true, 
        action_type_id: actionTypeId2, 
        priority_id: priorityId2,
        user_id: userId2
      },
      {
        description: 'Test Action #3',
        title: 'Test Action #3 Title',
        visibility: false, 
        action_type_id: actionTypeId3, 
        priority_id: priorityId3,
        user_id: userId3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('action', null, {});
  }
};
