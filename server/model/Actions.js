/* eslint-disable camelcase */
const db = require('./db');

module.exports = {
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
      ${priority_id}, ${user_id}, '${title}')
    `;
    try {
      await db.query(query);
      return 1;
    } catch (err) {
      return err;
    }
  },
};
