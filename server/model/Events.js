const db = require('./db');

module.exports = {
	getEvents(id, cb) {
		let query = `select * from action ${id ? `where id = ${id}` : ''}`;
		db.query(query, cb);
	},

	getEventsByPriority(id, cb) {
		let query = `select * from action where priority_id = ${id}`;
		db.query(query, cb);
	},

	getEventByType(id, cb) {
		// let query = `select * from action inner join action_type on action.action_type_id=action_type.id where action_type.id = ${id};`;
		let query = `select a.id, t.name as action_type, a.title, a.description, a.timestamp, a.visibility, p.name as priority_status from action  a
		INNER JOIN action_type t on a.action_type_id=t.id
		INNER JOIN priority_status_type p on p.id = a.priority_id
		WHERE t.id = ${id}`;
		db.query(query, cb);
	}
};
