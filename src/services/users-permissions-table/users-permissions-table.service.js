// Initializes the `users_permissions_table` service on path `/users_permissions_table`
const createService = require('feathers-knex');
const createModel = require('../../models/users-permissions-table.model');
const hooks = require('./users-permissions-table.hooks');
const filters = require('./users-permissions-table.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		id: 'up_id',
		name: 'users-permissions-table',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/users_permissions_table', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('users_permissions_table');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
