const fs = require('fs');
const path = require('path');
const test = require('tape');

const index = require('..');

const files = { ...{ index } };

fs.readdirSync(path.join(__dirname, '../rules')).forEach(name => {
  files[name] = require(`../rules/${name}`);
});

Object.keys(files).forEach(name => {
  const config = files[name];

  test(`${name}: does not reference react`, t => {
    t.plan(2);

    // scan plugins for react and fail if it is found
    const hasReactPlugin =
      Object.prototype.hasOwnProperty.call(config, 'plugins') &&
      config.plugins.includes('react');
    t.notOk(hasReactPlugin, 'there is no react plugin');

    // scan rules for react/ and fail if any exist
    const reactRuleIds = Object.keys(config.rules).filter(
      ruleId => ruleId.indexOf('react/') === 0,
    );
    if (
      !name.localeCompare('best-practices.js') ||
      !name.localeCompare('index.js')
    ) {
      t.notEqual(reactRuleIds.length, 0, 'there is no unused react rules');
    } else {
      t.isEqual(reactRuleIds.length, 0, 'there is unused react rules');
    }
  });
});
