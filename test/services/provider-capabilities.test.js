const assert = require('assert');
const app = require('../../src/app');

describe('\'provider_capabilities\' service', () => {
	it('registered the service', () => {
		const service = app.service('provider_capabilities');

		assert.ok(service, 'Registered the service');
	});
});
