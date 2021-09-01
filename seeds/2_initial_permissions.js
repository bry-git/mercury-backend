exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('permissions')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('permissions').insert([
				{ name: 'super_doer' },
				{ name: 'db_read' },
				{ name: 'db_write' }
			]);
		});
};
