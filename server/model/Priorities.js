// TODO:
// 1. Write insert statement -> Done
// 2. Write update statement -> Done

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
            return res.rows | res;
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

            return res.rows | res;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    // *** By Organization ***
    async createPriority(body) {
        delete body.id;

        const dbColString = Object.keys(body).join(", ");

        const dbValueString = Object.values(body)
            .map(value => {
                if (value === null) return "null";
                if (typeof value === "string") return "'" + value + "'";
                return value;
            })
            .join(", ");

        const dbStatement = `insert into test.priority (${dbColString}) values (${dbValueString});`;

        try {
            const result = await db.query(dbStatement);
            return result;
        } catch (err) {
            return err;
        }
    },

    async getAllPrioritiesByOrganization(orgId) {
        try {
            const res = await db.query(`select p.*, pt.name as priorityType 
                            from test.priority p inner join test.priority_type pt on p.priority_type_id = pt.id 
                            where p.organization_id = ${orgId};`);
            // const res = await db.query(`select * from test.priority where test.priority.organization_id = ${orgId};`);
            return res.rows | res;
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
            return res.rows | res;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    async updatePriorityByOrganization(orgId, priorityId, body) {
        console.log(`UPDATE org_id = ${orgId}, priority_id = ${priorityId}`);
        const newValues = Object.entries(body).map(([key, value]) => {
            delete body.id;

            let formattedValue;
            if (value === null) {
                formattedValue = "null";
            } else if (typeof value === "string") {
                formattedValue = "'" + value + "'";
            } else {
                formattedValue = value;
            }

            return `${key} = ${formattedValue}`
        }).join(', ');

        const query = `UPDATE test.priority SET ${newValues} WHERE organization_id = ${orgId} and id = ${priorityId};`;
        console.log(query);

        try {
            const res = await db.query(query);
            if (res.rowCount === 0) throw Error("Priority does not exist");
            return res.rows | res;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    // *** By District ***

    async getAllPrioritiesByDistrict(distId) {
        /* distId is currently set as varchar in db. If later distId is to become integer, please remove the quotation mark around distId in the query statement below */
        const query = `SELECT test.priority.*, test.organization.district FROM test.priority INNER JOIN test.organization ON test.priority.organization_id = test.organization.id WHERE test.organization.district = '${distId}';`
        // console.log(query);

        try {
            const res = await db.query(query);
            return res.rows;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    // async getPriorityByDistrict(distId, priorityId) {
    //     try {
    //         const res = await db.query(`select * from test.priority
    //                                     where test.priority.organization_id = ${orgId}
    //                                     and test.priority.id = ${priorityId}
    //                                     `);
    //         return res.rows | res;
    //     } catch (err) {
    //         console.log(err);
    //         throw err;
    //     }
    // }
}