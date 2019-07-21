// TODO:
// 1. Write insert statement
// 2. Write update statement

const db = require('./db');

module.exports = {
    async getAllPriorities() {
        try {
            // const res = await db.query(`select * from test.priority`);
            const res = await db.query(`select pt.name, p.description, pst.name as status, CONCAT(u.first_name, ' ', u.last_name) as creator, o.name as neighborhood
            from test.priority p
                   inner join test.priority_type pt on p.priority_type_id = pt.id
                   inner join test.priority_status_type pst on p.priority_status_type_id = pst.id
                   inner join test.user u on p.user_id = u.id
                   inner join test.organization o on p.organization_id = o.id;`);
            return { rows } = res;
        } catch (err) {
            throw err;
        }
    },

    // *** By Organization ***
    async createPriority(orgId, props) {
        console.log(`Creating priority for ORG ${orgId}`);
        try {
            // insert into test.priority () values ()
            const res = await db.query(``);
            return { rows } = res;
        } catch (err) {
            throw err;
        }
    },

    async getAllPrioritiesByOrganization(orgId) {
        try {
            const res = await db.query(`select * from test.priority where test.priority.organization_id = ${orgId};`);
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