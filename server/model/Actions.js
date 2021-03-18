/* eslint-disable camelcase */
const db = require('./db');
const email = require("../services/emailService");
const { Action, ActionType  } = require('../../sequelize/models');

// once needed --> const sms = require("../services/smsService");

module.exports = {

  async getAll() {
    try{
      return await Action.findAll({
        include: [
          ActionType
        ]
      })
    }
    catch (e) {
      console.error(e);
    } 
    return null; 
  },

  async getActions(id) {
    const query = `SELECT * FROM action ${id ? `WHERE id = ${id}` : ''}`;
    return db.query(query);
  },

  async getActionsByPriority(id) {
    const query = `SELECT * FROM action WHERE priority_id = ${id}`;
    return db.query(query);
  },

  async getActionsByType(id) {
    const query = `
      SELECT a.id, t.name as action_type, a.title, a.description, a.timestamp,
      a.visibility, p.name as priority_status FROM action a
      INNER JOIN action_type t on a.action_type_id = t.id
      INNER JOIN priority_status_type p on p.id = a.priority_id
      WHERE t.id = ${id}`;
    return db.query(query);
  },

  async createAction(body) {
    console.log(body);
    const {
      action_type_id,
      description,
      visibility,
      priority_id,
      user_id,
      title,
    } = body;

    const query = `
      INSERT INTO action (action_type_id, description,
        visibility, priority_id, user_id, title)
      VALUES (${action_type_id}, '${description}', ${visibility},
      ${priority_id}, ${user_id}, '${title}') RETURNING id
    `;
    try {
      const result = await db.query(query);

      // get the 'pretty' info needed for the notification
      const newAction = await db.query(`SELECT a.title, a.description, a.timestamp, at.name as action_type, p.description AS priority_description, CONCAT(u.first_name, ' ', u.last_name) AS creator
                                        FROM action a
                                              INNER JOIN action_type at ON a.action_type_id = at.id
                                              INNER JOIN priority p ON a.priority_id = p.id
                                              INNER JOIN user u ON a.user_id = u.id
                                          WHERE a.id = ${result.rows[0].id}`);

      email.sendEmail("e@earldamron.com", 
        `New Action Taken on Priority: ${newAction.rows[0].priority_description}`, 
`A new action has been taken on this priority. Here's the information about it:

Title: ${newAction.rows[0].title}
Event: ${newAction.rows[0].description}
Created By: ${newAction.rows[0].creator}

Direct Link: <direct link here...>
          `);

      return 1;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
