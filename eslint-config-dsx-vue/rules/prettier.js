module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/unicorn',
    'prettier/vue',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'all',
        useTabs: false,
        tabWidth: 2,
        semi: true,
        quoteProps: 'as-needed',
        arrowParens: 'avoid',
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        vueIndentScriptAndStyle: true,
        endOfLine: 'auto',
        printWidth: 80,
      },
    ],
  },
};