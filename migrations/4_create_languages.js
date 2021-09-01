exports.up = function (knex) {
	return knex.schema.createTable('languages', (table) => {
		table.increments('language_id');
		table.string('trigraph_code').notNullable();
		table.string('digraph_code');
		table.string('name').notNullable();
		table.string('alternate_name');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('languages');
};
