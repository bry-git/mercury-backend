const assert = require('assert');
const app = require('../../src/app');

describe('\'users_permissions_table\' service', () => {
	it('registered the service', () => {
		const service = app.service('users_permissions_table');

		assert.ok(service, 'Registered the service');
	});
});
