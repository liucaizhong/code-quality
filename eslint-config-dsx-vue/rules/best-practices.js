module.exports = {
  extends: ['plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.json', '.tsx', '.jsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
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
    'jsx-a11y/lang': 'error',
  },
};
