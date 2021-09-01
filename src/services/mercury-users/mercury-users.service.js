// Initializes the `mercury_users` service on path `/mercury_users`
const createService = require('feathers-knex');
const createModel = require('../../models/mercury-users.model');
const hooks = require('./mercury-users.hooks');
const filters = require('./mercury-users.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		id: 'user_id',
		name: 'mercury_users',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/mercury_users', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('mercury_users');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
