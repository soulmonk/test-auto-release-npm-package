const { MongoClient } = require("mongodb");
const { expect } = require('chai');

describe('when connecting to mongo', () => {
	let client;
	before('connect to mongo', async () => {
		// Connection URI
		const uri = "mongodb://127.0.0.1:27017/?maxPoolSize=20&w=majority";
		client = new MongoClient(uri);
		await client.connect();
	})
	after('close connection', async () => {
		await client.close();
	});
	it('should ping', async () => {
		const res = await client.db("test").command({ ping: 1 });
		expect(res).to.be.eql({ ok: 1 })
	});
});