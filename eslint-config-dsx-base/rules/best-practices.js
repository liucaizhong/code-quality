module.exports = {
  extends: ['airbnb-base', 'plugin:unicorn/recommended'],
  plugins: ['unicorn', 'optimize-regex'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.json', '.tsx', '.jsx']
      },
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ]
  },
  parser: 'babel-eslint',
  rules: {
    'optimize-regex/optimize-regex': 'warn',
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'global-require': 'warn',
    curly: ['error', 'multi'],
    'array-bracket-even-spacing': 'off',
    'computed-property-even-spacing': 'off',
    'object-curly-even-spacing': 'off',
    'prefer-exponentiation-operator': 'error',
    'unicorn/filename-case': ['off'],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/prefer-exponentiation-operator': 'off',
    'unicorn/better-regex': 'error',
    'unicorn/regex-shorthand': 'off',
    'unicorn/prevent-abbreviations': ['error', {
      checkFilenames: false,
    }],
    'import/extensions': [
      'error',
      'always',
      {
        'ts': 'never',
        'tsx': 'never',
        'js': 'never',
        'jsx': 'never'
      }
    ],
  },
};
