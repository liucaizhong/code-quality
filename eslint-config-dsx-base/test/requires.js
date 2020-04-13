const test = require('tape');

test('all entry points parse', t => {
  t.doesNotThrow(() => require('..'), 'index does not throw');
  t.doesNotThrow(() => require('../typescript'), 'typescript does not throw');
  t.doesNotThrow(() => require('../prettier'), 'prettier does not throw');

  t.end();
});
