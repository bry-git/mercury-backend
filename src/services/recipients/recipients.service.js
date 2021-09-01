// Initializes the `recipients` service on path `/recipients`
const createService = require('feathers-knex');
const createModel = require('../../models/recipients.model');
const hooks = require('./recipients.hooks');
const filters = require('./recipients.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		id: 'recipient_id',
		name: 'recipients',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/recipients', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('recipients');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
