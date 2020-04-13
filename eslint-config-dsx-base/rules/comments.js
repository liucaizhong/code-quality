module.exports = {
  extends: ['plugin:jsdoc/recommended', 'plugin:eslint-comments/recommended'],
  plugins: ['jsdoc', 'eslint-comments'],
  rules: {
    'no-inline-comments': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-restricted-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-use': [
      'error',
      {
        allow: [
          'eslint-disable',
          'eslint-enable',
          'eslint-disable-line',
          'eslint-disable-next-line',
        ],
      },
    ],
  },
};
