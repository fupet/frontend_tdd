var assert = require('chai').assert,
	sinon = require('sinon'),
	Backbone = require('backbone'),

	Dropdown = require('../../libs/Dropdown/view'),
	testContent = require('./content/testcontent1.html');

suite('testing dropdown view', function() {
	setup(function() {
		Backbone.$('#sandbox').html(testContent);

		this.dropdown = new Dropdown({el : '#dropdown'});
	});
});