module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: module,
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'warn',
  },
};
