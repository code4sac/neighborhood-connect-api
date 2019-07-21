// TODO:
// 1. Write insert statement
// 2. Write update statement

const db = require('./db');

module.exports = {
    async getAllPriorities() {
        try {
            const res = await db.query(`select pt.name as type, p.description, pst.name as status, CONCAT(u.first_name, ' ', u.last_name) as creator, o.name as neighborhood
                   from test.priority p
                   inner join test.priority_type pt on p.priority_type_id = pt.id
                   inner join test.priority_status_type pst on p.priority_status_type_id = pst.id
                   inner join test.user u on p.user_id = u.id
                   inner join test.organization o on p.organization_id = o.id`);
            return { rows } = res;
        } catch (err) {
            throw err;
        }
    },

    async getActions(priorityId) {
        console.log('pId', priorityId);
        try {
            const res = await db.query(`select p.id, p.rank, a.id, a.title, a.description as event, a.timestamp, concat(u.first_name, ' ', u.last_name) as creator
                from test.action a inner join test.priority p on a.priority_id = p.id
                 inner join test.user u on a.user_id = u.id
                 where p.id = ${priorityId};`);

            return { rows } = res;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    // *** By Organization ***
    async createPriority(body) {
        // console.log(`${Object.keys(props)}`);
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

        const dbStatement = `insert into test.priority (${dbColString}) values (${dbValueString});`;

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
            const res = await db.query(`select p.*, pt.name as priorityName 
                            from test.priority p inner join test.priority_type pt on p.priority_type_id = pt.id 
                            where p.organization_id = ${orgId};`);
            // const res = await db.query(`select * from test.priority where test.priority.organization_id = ${orgId};`);
            return { rows } = res;
        } catch (err) {
            // console.log(err);
            throw err;
        }
    },

    async getPriorityByOrganization(orgId, priorityId) {
        try {
            const res = await db.query(`select * from test.priority
                                        where test.priority.organization_id = ${orgId}
                                        and test.priority.id = ${priorityId}
                                        `);
            return { rows } = res;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    async updatePriorityByOrganization(orgId, priorityId) {
        console.log(`Updating priority for ORG ${orgId}`);
        try {
            // update test.priority set 
            const res = await db.query(``);
            return { rows } = res;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    // *** By District ***
    async getAllPrioritiesByDistrict(distId) {
        try {
            const res = await db.query(`select * from test.priority where test.priority.organization_id = ${orgId};`);
            return { rows } = res;
        } catch (err) {
            // console.log(err);
            throw err;
        }
    },

    // async getPriorityByDistrict(distId, priorityId) {
    //     try {
    //         const res = await db.query(`select * from test.priority
    //                                     where test.priority.organization_id = ${orgId}
    //                                     and test.priority.id = ${priorityId}
    //                                     `);
    //         return { rows } = res;
    //     } catch (err) {
    //         console.log(err);
    //         throw err;
    //     }
    // }
}