module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    worker: true,
    serviceworker: true,
    webextensions: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:promise/recommended'],
  plugins: ['promise'],
  rules: {
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-dynamic-require': 'warn',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
  },
};
