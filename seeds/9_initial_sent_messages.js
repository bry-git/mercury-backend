exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('sent_messages')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('sent_messages').insert([
				{ sender_id: 1, recipient_id: 1, content: 'Rosebud' },
				{ sender_id: 1, recipient_id: 2, content: 'Rosebud' },
				{ sender_id: 1, recipient_id: 3, content: 'Rosebud' },
				{
					sender_id: 2,
					recipient_id: 1,
					content: 'Goosebumps was an okay show back in the day'
				},
				{
					sender_id: 2,
					recipient_id: 2,
					content: 'Goosebumps was an okay show back in the day'
				},
				{
					sender_id: 2,
					recipient_id: 3,
					content: 'Goosebumps was an okay show back in the day'
				},
				{ sender_id: 3, recipient_id: 1, content: 'Did you see that movie Tomorrow War?' },
				{ sender_id: 3, recipient_id: 2, content: 'Did you see that movie Tomorrow War?' },
				{ sender_id: 3, recipient_id: 3, content: 'Did you see that movie Tomorrow War?' }
			]);
		});
};
