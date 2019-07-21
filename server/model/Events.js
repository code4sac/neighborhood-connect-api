const db = require('./db');

module.exports = {
	getEvents(id, cb) {
		let query = `select * from action ${id ? `where id = ${id}` : ''}`;
		db.query(query, cb);
	},

	getEventByPriority(id, cb) {
		let query = `select * from action where priority_id = ${id}`;
		db.query(query, cb);
	},
	getEventByType(id, cb) {
		let query = `select * from action inner join action_type on action.action_type_id=action_type.id where action_type.id = ${id};`;
		db.query(query, cb);
	}
};
