const app = require('../src/app');
const request = require('supertest');
describe('/mercury_users', () => {
	xit('gets a user', async () => {
		const response = await request(app).get('/mercury_users');
		console.log('users ', response);
	});
});
