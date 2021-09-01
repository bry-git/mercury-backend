/* eslint-disable no-console */

// recipients_groups_table-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
	const db = app.get('knexClient');
	const tableName = 'recipients_groups_table';
	db.schema.hasTable(tableName).then((exists) => {
		if (!exists) {
			db.schema
				.createTable(tableName, (table) => {
					table.increments('id');
					table.string('text');
				})
				.then(() => console.log(`Created ${tableName} table`))
				.catch((e) => console.error(`Error creating ${tableName} table`, e));
		}
	});

	return db;
};
