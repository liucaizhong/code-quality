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

  test(`${name}: does not reference vue`, t => {
    t.plan(2);

    // scan plugins for vue and fail if it is found
    const hasVuePlugin =
      Object.prototype.hasOwnProperty.call(config, 'plugins') &&
      config.plugins.includes('vue');
    t.notOk(hasVuePlugin, 'there is no vue plugin');

    // scan unused rules for vue/ and success if any exist
    const vueRuleIds = Object.keys(config.rules).filter(
      ruleId => ruleId.indexOf('vue/') === 0,
    );

    t.equal(vueRuleIds.length, 0, 'there is no unused vue rules');
  });
});
