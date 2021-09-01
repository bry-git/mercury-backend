exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('users_permissions_table')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('users_permissions_table').insert([
				{ user_id: 1, permission_id: 1 },
				{ user_id: 2, permission_id: 1 },
				{ user_id: 3, permission_id: 1 }
			]);
		});
};
