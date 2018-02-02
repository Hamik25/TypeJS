const test = require('tap').test;

const TypeJS = require('../TypeJS');

test('Test String', function(t) {
	let x = 'ads';
	t.is(x._TypeJS, 'String');
  	t.end();
});

test('Test Array', function(t) {
	let x = [0, 1, 5];
	t.is(x._TypeJS, 'Array');
  	t.end();
});

test('Test Number', function(t) {
	let x = 8;
	t.is(x._TypeJS, 'Number');
  	t.end();
});
