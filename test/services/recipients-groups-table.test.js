const assert = require('assert');
const app = require('../../src/app');

describe('\'recipients_groups_table\' service', () => {
	it('registered the service', () => {
		const service = app.service('recipients_groups_table');

		assert.ok(service, 'Registered the service');
	});
});
