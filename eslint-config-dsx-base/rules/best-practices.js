module.exports = {
  extends: ['airbnb-base'],
  plugins: ['optimize-regex'],
  rules: {
    'optimize-regex/optimize-regex': 'warn',
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'global-require': 'warn',
  },
};
