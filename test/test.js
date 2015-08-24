var should = require("should");
var app = require("../");

describe("Test placeholder", function () {
	it("testing frameworks", function (done) {
		app.should.not.be.null;
		done();
	});

	it("calls into stuff written in coffeescript", function (done) {
		app.fillMyJar("Java").should.equal("Filling the jar with Java...");
		done();
	});

	it("calls into stuff written in typescript too", function (done) {
		app.greetAType("Marcus").should.equal("A type-scripting greeting to you, Marcus");
		done();
	});
});