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

const TypeJS = require('../index');

test('Test String Type', function() {
  	let x = 'ads';
  	expect(TypeJS.getType(x)).toBe('String');
});

test('Test Array Type', function() {
  let x = [1, 6, {}, ''];
  expect(TypeJS.getType(x)).toBe('Array');
});

test('Test Function Type', function() {
  let foo_declaration = function(){};
  function foo_expresion() {};

  expect(TypeJS.getType(foo_declaration)).toBe('Function');
  expect(TypeJS.getType(foo_expresion)).toBe('Function');
});

test('Test Undefined Type', function() {
  let x;
  let y = undefined;
  function foo(){};
  let z = foo();
  expect(TypeJS.getType(x)).toBe('Undefined');
  expect(TypeJS.getType(y)).toBe('Undefined');
  expect(TypeJS.getType(z)).toBe('Undefined');
});

test('Test Date Type', function() {
  let x = new Date();
  expect(TypeJS.getType(x)).toBe('Date');
});


// TODO implement false value test
test('Test Boolean Type', function() {
  let x = true;

  expect(TypeJS.getType(x)).toBe('Boolean');
});

// TODO implement NaN value test
test('Test Number', function() {
  let x = 4;
  expect(TypeJS.getType(x)).toBe('Number');
});

test('Test Infinity', function() {
  let x = 4 / 0;
  expect(TypeJS.getType(x)).toBe('Infinity');
});

test('Test -Infinity', function() {
  let x = -4 / 0;
  expect(TypeJS.getType(x)).toBe('-Infinity');
});
