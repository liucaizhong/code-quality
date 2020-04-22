module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'global-require': 'warn',
    'import/no-dynamic-require': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
