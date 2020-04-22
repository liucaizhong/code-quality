module.exports = {
  extends: ['eslint-config-dsx-base', './rules/best-practices'].map(
    require.resolve,
  ),
  rules: {},
};
