exports.up = function (knex) {
	return knex.schema.createTable('mercury_users', (table) => {
		table.increments('user_id');
		table.string('username').notNullable();
		table.string('password').notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('mercury_users');
};
