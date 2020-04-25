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
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.json', '.tsx', '.jsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    react: {
      version: 'detect',
    },
  },
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
