// TODO:
// 1. Write insert statement
// 2. Write update statement

const db = require('./db');
const Utilities = require('../../utils.js');
const Logger = require('../services/logService.js');
const notificationService = require('../services/notificationService');

// used to get all prirorities, and to get a single priority
// (with the addition of a WHERE clause)
const GET_ALL_PRIORITIES = `SELECT pt.id, pt.name AS type, p.description, pst.name AS status,
                            CONCAT(u.first_name, ' ', u.last_name) AS creator, o.name AS neighborhood
                            FROM test.priority p
                            INNER JOIN test.priority_type pt ON p.priority_type_id = pt.id
                            INNER JOIN test.priority_status_type pst ON p.priority_status_type_id = pst.id
                            INNER JOIN test.user u ON p.user_id = u.id
                            INNER JOIN test.organization o ON p.organization_id = o.id`;

module.exports = {
  async getAllPriorities() {
    return db.query(GET_ALL_PRIORITIES);
  },

  async getActionsByPriority(priorityId) {
    return db.query(`
      SELECT p.id, p.rank, a.id, a.title, a.description AS event, a.timestamp,
      CONCAT(u.first_name, ' ', u.last_name) AS creator
      FROM test.action a INNER JOIN test.priority p ON a.priority_id = p.id
      INNER JOIN test.user u ON a.user_id = u.id
      WHERE p.id = ${priorityId};`);
  },

  // *** By Organization ***
  async createPriority(body) {
    // console.log(`${Object.keys(body)}`);
    // try {
    //     // insert into test.priority () values ()
    //     const res = await db.query(``);
    //     return { rows } = res;
    // } catch (err) {
    //     throw err;
    // }

    // const rankResponse = awaiGETt db.query(`select max(rank) from (select rank from test.priority where id=${body.id})`);
    // const rank = rankResponse.rows[0].max + 1;

    const dbColString = Object.keys(body).join(', ');

    const dbValueString = Object.values(body).map(value => {
      if (value === null) {
        return 'null';
      }

      if (Utilities.isValueString(value)) {
        return `'${value}'`;
      }

      return value;
    }).join(', ');

    // the 'RETURNING id' part at the end gives back the
    // newly inserted priority id via `result.rows[0].id`
    const dbStatement = `INSERT INTO test.priority (${dbColString}) VALUES (${dbValueString}) RETURNING id;`;

    Logger.logDebug(dbStatement);

    try {
      const result = await db.query(dbStatement);

      // get the 'pretty' info needed for the notification
      const newPriority = await db.query(`${GET_ALL_PRIORITIES}
                                          WHERE p.id = ${result.rows[0].id}`);

      notificationService.sendEmail('e@earldamron.com', 'New Priority Created',
          `A new neighborhood priority has been created. Here's the information about it:

          Neighborhood: ${newPriority.rows[0].neighborhood}
          Type: ${newPriority.rows[0].type}
          Created By: ${newPriority.rows[0].creator}
          Description: ${newPriority.rows[0].description}

          Direct Link: <direct link here...>
        `);

      return result;
    } catch (err) {
      Logger.logError(err);
      return err;
    }
  },

  async getAllPrioritiesByOrganization(orgId) {
    try {
      return db.query(`
        SELECT p.*, pt.name AS priorityType
        FROM test.priority p INNER JOIN test.priority_type pt ON p.priority_type_id = pt.id
        WHERE p.organization_id = ${orgId};`);
    } catch (err) {
      throw err;
    }
  },

  async getPriorityByOrganization(orgId, priorityId) {
    try {
      return db.query(`
        SELECT * FROM test.priority
        WHERE test.priority.organization_id = ${orgId}
        AND test.priority.id = ${priorityId}
      `);
    } catch (err) {
      throw err;
    }
  },

  // fill me in
  async updatePriorityByOrganization(orgId, priorityId) {
    try {
      const res = await db.query(``);
      return ({ rows } = res);
    } catch (err) {
      throw err;
    }
  },

  // *** By District ***
  async getAllPrioritiesByDistrict(distId) {
    try {
      return db.query(`
        SELECT * FROM test.priority
        WHERE test.priority.organization_id = ${distId};`);
    } catch (err) {
      throw err;
    }
  },

  // *** Patch Priority Rank ***
  async updateRank(body) {
    const { promotedId, demotedId, promotedRank, demotedRank } = body;
    try {
      const updatePriority = await db.query(`
        UPDATE test.priority
        SET rank = ${promotedRank}
        WHERE id = ${promotedId}
      `);

      const demotePriority = await db.query(`
        UPDATE test.priority
        SET rank = ${demotedRank}
        WHERE id = ${demotedId}
      `);

      return null;
    } catch (err) {
      Logger.logError(err);
      return err;
    }
  },

  // async getPriorityByDistrict(distId, priorityId) {
  //     try {
  //         const res = await db.query(`SELECT * FROM test.priority
  //                                     WHERE test.priority.organization_id = ${orgId}
  //                                     AND test.priority.id = ${priorityId}
  //                                     `);
  //         return { rows } = res;
  //     } catch (err) {
  //         console.log(err);
  //         throw err;
  //     }
  // }
};
