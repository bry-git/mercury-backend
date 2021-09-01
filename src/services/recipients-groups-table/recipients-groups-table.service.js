// Initializes the `recipients_groups_table` service on path `/recipients_groups_table`
const createService = require('feathers-knex');
const createModel = require('../../models/recipients-groups-table.model');
const hooks = require('./recipients-groups-table.hooks');
const filters = require('./recipients-groups-table.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		id: 'rg_id',
		name: 'recipients-groups-table',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/recipients_groups_table', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('recipients_groups_table');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
