exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('groups')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('groups').insert([
				{ name: 'Group1', description: 'CBSD -- Vetted Interpreters' },
				{ name: 'Group2', description: 'CBSD -- Non-Vetted Interpreters' },
				{ name: 'Group3', description: 'CBSD -- Linguists' }
			]);
		});
};
