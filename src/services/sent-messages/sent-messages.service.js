// Initializes the `sent_messages` service on path `/sent_messages`
const createService = require('feathers-knex');
const createModel = require('../../models/sent-messages.model');
const hooks = require('./sent-messages.hooks');
const filters = require('./sent-messages.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		id: 'sent_messages_id',
		name: 'sent-messages',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/sent_messages', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('sent_messages');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
