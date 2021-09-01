const assert = require('assert');
const app = require('../../src/app');

describe('\'recipients\' service', () => {
	it('registered the service', () => {
		const service = app.service('recipients');

		assert.ok(service, 'Registered the service');
	});
});
