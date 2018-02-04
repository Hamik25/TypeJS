// change test lib to jest

const test = require('tap').test;

const TypeJS = require('../index');

test('smoke test', function(t) {
  const string = TypeJS();
  t.is(typeof string, 'string');
  t.end();
});

test('Test Infinity', function(t) {
	let x = 8 / 0;
	let y = -90 / 0;
	t.is(x._TypeJS, 'Infinity');
	t.is(y._TypeJS, '-Infinity');
  	t.end();
});

test('Test NaN', function(t) {
	let x = 8 * 'foo';
	t.is(x._TypeJS, 'NaN');
  	t.end();
});
