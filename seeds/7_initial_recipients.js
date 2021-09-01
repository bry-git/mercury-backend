exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipients')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('recipients').insert([
				{
					first_name: 'Bob',
					last_name: 'Hope',
					phone_number: '1111111111',
					preferred_language: 1,
					added_by: 1,
					comm_method: 1
				},
				{
					first_name: 'Gordon',
					last_name: 'Ramsey',
					phone_number: '2222222222',
					preferred_language: 1,
					added_by: 1,
					comm_method: 2
				},
				{
					first_name: 'Frank',
					last_name: 'West',
					phone_number: '3333333333',
					preferred_language: 1,
					added_by: 1,
					comm_method: 2
				},
				{
					first_name: 'Gordon',
					last_name: 'Friedman',
					phone_number: '4444444444',
					preferred_language: 1,
					added_by: 2,
					comm_method: 2
				},
				{
					first_name: 'Aaron',
					last_name: 'Davis',
					phone_number: '5555555555',
					preferred_language: 1,
					added_by: 1,
					comm_method: 2
				},
				{
					first_name: 'Hank',
					last_name: 'Hill',
					phone_number: '6666666666',
					preferred_language: 1,
					added_by: 1,
					comm_method: 2
				},
				{
					first_name: 'Bobby',
					last_name: 'Hill',
					phone_number: '7777777777',
					preferred_language: 1,
					added_by: 1,
					comm_method: 2
				},
				{
					first_name: 'Richard',
					last_name: 'Nixon',
					phone_number: '8888888888',
					preferred_language: 1,
					added_by: 1,
					comm_method: 2
				},
				{
					first_name: 'Ray',
					last_name: 'Liotta',
					phone_number: '9999999999',
					preferred_language: 1,
					added_by: 1,
					comm_method: 2
				},
				{
					first_name: 'Klark',
					last_name: 'Kent',
					phone_number: '1111111112',
					preferred_language: 1,
					added_by: 1,
					comm_method: 1
				},
				{
					first_name: 'Bruce',
					last_name: 'Wayne',
					phone_number: '2222222223',
					preferred_language: 1,
					added_by: 1,
					comm_method: 2
				},
				{
					first_name: 'Nathan',
					last_name: 'Allen',
					phone_number: '1111111113',
					preferred_language: 1,
					added_by: 1,
					comm_method: 2
				}
			]);
		});
};
