// Initializes the `languages` service on path `/languages`
const createService = require('feathers-knex');
const createModel = require('../../models/languages.model');
const hooks = require('./languages.hooks');
const filters = require('./languages.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		id: 'language_id',
		name: 'languages',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/languages', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('languages');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
