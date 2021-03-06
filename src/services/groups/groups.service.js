// Initializes the `groups` service on path `/groups`
const createService = require('feathers-knex');
const createModel = require('../../models/groups.model');
const hooks = require('./groups.hooks');
const filters = require('./groups.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		id: 'group_id',
		name: 'groups',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/groups', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('groups');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
