// change test lib to jest

// const test = require('tap').test;

// const TypeJS = require('../TypeJS');

// test('Test String', function(t) {
// 	let x = 'ads';
// 	t.is(x._TypeJS, 'String');
//   	t.end();
// });

// test('Test Array', function(t) {
// 	let x = [0, 1, 5];
// 	t.is(x._TypeJS, 'Array');
//   	t.end();
// });

// test('Test Number', function(t) {
// 	let x = 8;
// 	t.is(x._TypeJS, 'Number');
//   	t.end();
// });

// test('Test Infinity', function(t) {
// 	let x = 8 / 0;
// 	let y = -90 / 0;
// 	t.is(x._TypeJS, 'Infinity');
// 	t.is(y._TypeJS, '-Infinity');
//   	t.end();
// });

// test('Test NaN', function(t) {
// 	let x = 8 * 'foo';
// 	t.is(x._TypeJS, 'NaN');
//   	t.end();
// });

const _TypeJS = require('../index');

test('Test String', function() {
  	let x = 'ads';
  	expect(x._TypeJS).toBe('String');
});