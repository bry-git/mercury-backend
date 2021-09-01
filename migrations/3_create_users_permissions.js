exports.up = function (knex) {
	return knex.schema.createTable('users_permissions_table', (table) => {
		table.increments('up_id');
		table.integer('user_id').notNullable();
		table.foreign('user_id').references('user_id').inTable('mercury_users').onDelete('CASCADE');
		table.integer('permission_id').notNullable();
		table.foreign('permission_id').references('permission_id').inTable('permissions');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('users_permissions_table');
};
