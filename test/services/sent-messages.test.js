const assert = require('assert');
const app = require('../../src/app');

describe('\'sent_messages\' service', () => {
	it('registered the service', () => {
		const service = app.service('sent_messages');

		assert.ok(service, 'Registered the service');
	});
});
