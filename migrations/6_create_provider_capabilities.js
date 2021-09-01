exports.up = function (knex) {
	return knex.schema.createTable('provider_capabilities', (table) => {
		table.increments('pc_id');
		table.string('name').notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('provider_capabilities');
};
