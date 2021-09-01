exports.up = function (knex) {
	return knex.schema.createTable('groups', (table) => {
		table.increments('group_id');
		table.string('name').notNullable();
		table.string('description');
		table.timestamp('time_made', { precision: 6 }).defaultTo(knex.fn.now(6));
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('groups');
};
