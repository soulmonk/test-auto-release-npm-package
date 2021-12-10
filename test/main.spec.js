const { expect } = require('chai');
const testPackage = require('../src');

describe('when module used', () => {
	it('should return string', () => {
		expect(testPackage()).to.be.equal('test git actions')
	});
});