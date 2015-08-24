/*global require, describe, it, global */
var should = require("should");
var app = require("../");

describe("Test placeholder", function () {
	it("testing frameworks", function (done) {
		app.should.not.be.null;
		done();
	});

	it("calls into stuff written in coffeescript", function (done) {
		app.fillingCoffee().should.equal("Filling the Jar with Java...");
		done();
	});
});