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

test('Test Boolean Type', function() {
  let x = true;
  let y = false;
  expect(TypeJS.getType(x)).toBe('Boolean');
  expect(TypeJS.getType(y)).toBe('Boolean');
});

test('Test Int', function() {
  let x = 4;
  expect(TypeJS.getType(x)).toBe('Int');
});

test('Test Float', function() {
  let x = 4.98;
  expect(TypeJS.getType(x)).toBe('Float');
});

test('Test Infinity', function() {
  let x = 4 / 0;
  expect(TypeJS.getType(x)).toBe('Infinity');
});

test('Test -Infinity', function() {
  let x = -4 / 0;
  expect(TypeJS.getType(x)).toBe('-Infinity');
});

test('Test NaN', function() {
  let x = 45 / 'stas';
  expect(TypeJS.getType(x)).toBe('NaN');
});

test('Test Null', function() {
  let x = null;
  expect(TypeJS.getType(x)).toBe('Null');
});

test('Test Object', function() {
  let x = {};
  expect(TypeJS.getType(x)).toBe('Object');
});
