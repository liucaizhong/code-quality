module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.json', '.tsx', '.jsx', '.vue']
      },
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.vue'
    ]
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
        'ts': 'never',
        'tsx': 'never',
        'js': 'never',
        'jsx': 'never',
        'vue': 'never'
      }
    ],
    'jsx-a11y/lang': 'error',
    'vue/array-bracket-spacing': 'off',
    'vue/arrow-spacing': 'off',
    'vue/block-spacing': 'off',
    'vue/brace-style': 'off',
    'vue/camelcase': 'off',
    'vue/comma-dangle': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/dot-location': 'off',
    'vue/eqeqeq': 'off',
    'vue/key-spacing': 'off',
    'vue/keyword-spacing': 'off',
    'vue/match-component-file-name': 'off',
    'vue/max-len': 'off',
    'vue/no-boolean-default': 'off',
    'vue/no-custom-modifiers-on-v-model': 'off',
    'vue/no-empty-pattern': 'off',
    'vue/no-irregular-whitespace': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-restricted-syntax': 'off',
    'vue/no-static-inline-styles': 'off',
    'vue/no-template-target-blank': 'off',
    'vue/no-unsupported-features': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/object-curly-spacing': 'off',
    'vue/padding-line-between-blocks': 'off',
    'vue/require-direct-export': 'off',
    'vue/require-name-property': 'off',
    'vue/script-indent': 'off',
    'vue/sort-keys': 'off',
    'vue/space-infix-ops': 'off',
    'vue/space-unary-ops': 'off',
    'vue/static-class-names-order': 'off',
    'vue/v-on-function-call': 'off',
    'vue/valid-v-bind-sync': 'off',
  },
};
