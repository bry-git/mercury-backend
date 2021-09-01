exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipients_groups_table')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('recipients_groups_table').insert([
				{ recipient_id: 1, group_id: 1 },
				{ recipient_id: 1, group_id: 2 },
				{ recipient_id: 2, group_id: 2 },
				{ recipient_id: 3, group_id: 3 }
			]);
		});
};
