// TODO:
// 1. Write insert statement
// 2. Write update statement

const db = require("./db");

module.exports = {
  async getAllPriorities() {
    return db.query(`
      SELECT pt.id, pt.name AS type, p.description, pst.name AS status,
      CONCAT(u.first_name, ' ', u.last_name) AS creator, o.name AS neighborhood
      FROM test.priority p
      INNER JOIN test.priority_type pt ON p.priority_type_id = pt.id
      INNER JOIN test.priority_status_type pst ON p.priority_status_type_id = pst.id
      INNER JOIN test.user u ON p.user_id = u.id
      INNER JOIN test.organization o ON p.organization_id = o.id`);
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

    // const rankResponse = await db.query(`select max(rank) from (select rank from test.priority where id=${body.id})`);
    // const rank = rankResponse.rows[0].max + 1;

    const dbColString = Object.keys(body).join(", ");

    const dbValueString = Object.values(body)
      .map(value => {
        if (value === null) return "null";
        if (typeof value === "string") return "'" + value + "'";
        return value;
      })
      .join(", ");

    const dbStatement = `INSERT INTO test.priority (${dbColString}) VALUES (${dbValueString});`;

    console.log(dbStatement);

    try {
      const result = await db.query(dbStatement);
      return result;
    } catch (err) {
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
  async updatePriorityRank(priorityId, rankId) {
    try {
      const results = await db.query(`
        UPDATE test.priority
        SET rank = ${rankId}
        WHERE id = ${priorityId}
      `);
      console.log(`
        UPDATE test.priority
        SET rank = ${rankId}
        WHERE id = ${priorityId}
      `);
      console.log("results", results);
      return results;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

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
