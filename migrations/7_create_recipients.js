exports.up = function (knex) {
	return knex.schema.createTable('recipients', (table) => {
		table.increments('recipient_id');
		table.string('first_name');
		table.string('middle_name');
		table.string('last_name');
		table.string('phone_number');
		table.integer('preferred_language');
		table
			.foreign('preferred_language')
			.references('language_id')
			.inTable('languages')
			.onDelete('CASCADE');
		table.string('comments');
		table.timestamp('time_made', { precision: 6 }).defaultTo(knex.fn.now(6));
		table.integer('added_by');
		table.foreign('added_by').references('mercury_users.user_id').onDelete('CASCADE');
		table.integer('comm_method');
		table.foreign('comm_method').references('provider_capabilities.pc_id').onDelete('CASCADE');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('recipients');
};
