module.exports = {
  extends: ['./rules/best-practices', 'eslint-config-dsx-base'].map(
    require.resolve,
  ),
  rules: {},
};
