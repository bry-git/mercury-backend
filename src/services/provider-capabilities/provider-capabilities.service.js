// Initializes the `provider_capabilities` service on path `/provider_capabilities`
const createService = require('feathers-knex');
const createModel = require('../../models/provider-capabilities.model');
const hooks = require('./provider-capabilities.hooks');
const filters = require('./provider-capabilities.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		id: 'pc_id',
		name: 'provider-capabilities',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/provider_capabilities', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('provider_capabilities');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
