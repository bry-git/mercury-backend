exports.up = function (knex) {
	return knex.schema.createTable('sent_messages', (table) => {
		table.increments('sent_messages_id');
		table.integer('sender_id');
		table.foreign('sender_id').references('mercury_users.user_id').onDelete('CASCADE');
		table.integer('recipient_id');
		table.foreign('recipient_id').references('recipients.recipient_id').onDelete('CASCADE');
		table.string('content').notNullable();
		table.timestamp('time_made', { precision: 6 }).defaultTo(knex.fn.now(6));
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('sent_messages');
};
