// eslint-disable-next-line node/no-unpublished-require
const test = require('tape');

test('all entry points parse', t => {
  t.doesNotThrow(() => require('..'), 'index does not throw');

  t.end();
});
