const db = require('./db');

// TODO:
// 1. Write insert statement
// 2. Write update statement

module.exports = {
    async createPriority(props) {
        try {
            // insert into test.priority () values ()
            const res = await db.query(``);
            return { rows } = res;
        } catch (err) {
            throw new Error('Could not create priority');
        }
    },

    async getAllPriorities(orgId) {
        console.log(orgId);
        try {
            const res = await db.query(`select * from test.priority where test.priority.organization_id = ${orgId};`);
            return { rows } = res;
        } catch (err) {
            console.log(err);
            throw new Error('Could not get priorities');
        }
    },

    async getPriority(orgId, priorityId) {
        try {
            const res = await db.query(`select * from test.priority
                                        where test.priority.organization_id = ${orgId}
                                        and test.priority.id = ${priorityId}
                                        `);
            return { rows } = res;
        } catch (err) {
            console.log(err);
            throw new Error('Could not get priority');
        }
    },

    async updatePriority(orgId, priorityId) {
        try {
            // update test.priority set 
            const res = await db.query(``);
            return { rows } = res;
        } catch (err) {
            console.log(err);
            throw new Error('Could not update priority');
        }
    }

}