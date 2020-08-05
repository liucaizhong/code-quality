# eslint-config-dsx-vue

[![npm version](https://badge.fury.io/js/eslint-config-dsx-vue.svg)](http://badge.fury.io/js/eslint-config-dsx-vue)

This package provides DSX's vue .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-dsx-vue

Our default export contains all of our vue ESLint rules, including ECMAScript 6+.

1. Install the correct versions of each package, which are listed by the command:

    ```sh
    npm i -D eslint-config-dsx-vue
    ```

    If using **yarn**, run `yarn add -D eslint-config-dsx-vue`

2. Add "extends": "dsx-vue" to your .eslintrc.

### eslint-config/dsx-vue/typescript

This entry point enables the linting rules for typescript. To use, add `"extends": ["dsx-vue", "dsx-vue/typescript"]` to your `.eslintrc`

### eslint-config/dsx-vue/prettier

This entry point enables the linting rules for prettier. To use, add `"extends": ["dsx-vue", "dsx-vue/prettier"]` to your `.eslintrc`

**Tips:**
Make sure to put `"dsx-vue/prettier"` at the end of `"extends"` list.
