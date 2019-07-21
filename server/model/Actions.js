const db = require('./db');

module.exports = {
	getActions(id, cb) {
		let query = `select * from action ${id ? `where id = ${id}` : ''}`;
		db.query(query, cb);
	},

	getActionsByPriority(id, cb) {
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
	},
	async createAction(eventObject) {
		const {
			action_type_id,
			description,
			visibility,
			priority_id,
			user_id,
			title
		} = eventObject;

		const query = `INSERT INTO action (action_type_id, description, visibility, priority_id, user_id, title)
			VALUES (${action_type_id},
			'${description}',
			${visibility},
			${priority_id},
			${user_id},
			'${title}'),`;
		try {
			await db.query(query);
			return 1;
		} catch (err) {
			return err;
		}
	}
};
