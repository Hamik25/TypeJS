const test = require('tap').test;

const TypeJS = require('../index');

test('smoke test', function(t) {
  const string = TypeJS();
  t.is(typeof string, 'string');
  t.end();
});
