module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  rules: {
    'global-require': 'warn',
    'import/no-dynamic-require': 'warn',
  },
};
