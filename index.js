var fill = require("./lib/coffeeCode.js");
var greeter = require("./lib/tsCode.js");

module.exports.fillMyJar = function (beverage) {
	return fill("jar", beverage);
};

module.exports.greetAType = function (name) {
	var g = new greeter();
	return g.greet(name);
};