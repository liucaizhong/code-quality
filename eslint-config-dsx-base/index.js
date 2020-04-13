module.exports = {
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/comments',
    './rules/complexity',
    './rules/es6',
    './rules/prettier',
  ].map(require.resolve),
  parser: 'babel-eslint',
  rules: {},
};
