exports.up = function (knex) {
	return knex.schema.createTable('permissions', (table) => {
		table.increments('permission_id');
		table.string('name');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('permissions');
};
