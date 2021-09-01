exports.up = function (knex) {
	return knex.schema.createTable('recipients_groups_table', (table) => {
		table.increments('rg_id');
		table.integer('recipient_id');
		table
			.foreign('recipient_id')
			.references('recipient_id')
			.inTable('recipients')
			.onDelete('CASCADE');
		table.integer('group_id');
		table.foreign('group_id').references('group_id').inTable('groups').onDelete('CASCADE');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('recipients_groups_table');
};
