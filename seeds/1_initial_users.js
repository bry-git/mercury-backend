exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('mercury_users')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('mercury_users').insert([
				{ username: 'JRambo', password: 'secret' },
				{ username: 'JMatrix', password: 'secret' },
				{ username: 'MForce', password: 'secret' }
			]);
		});
};
