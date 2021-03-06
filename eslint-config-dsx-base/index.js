module.exports = {
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/comments',
    './rules/complexity',
    './rules/es6',
  ].map(require.resolve),
  rules: {},
};
