# eslint-config-dsx-base

[![npm version](https://badge.fury.io/js/eslint-config-dsx-base.svg)](http://badge.fury.io/js/eslint-config-dsx-base)

This package provides DSX's base JS .eslintrc (without React plugins) as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-dsx-base

Our default export contains all of our ESLint rules, including ECMAScript 6+.

1. Install the correct versions of each package, which are listed by the command:

    ```sh
    npm i -D eslint-config-dsx-base
    ```

  If using **yarn**, run `yarn add -D eslint-config-dsx-base` for each listed peer dependency.

2. Add "extends": "dsx-base" to your .eslintrc.

### eslint-config/dsx-base/typescript

This entry point enables the linting rules for typescript. To use, add `"extends": ["dsx-base", "dsx-base/typescript"]` to your `.eslintrc`

### eslint-config/dsx-base/prettier

This entry point enables the linting rules for prettier. To use, add `"extends": ["dsx-base", "dsx-base/prettier"]` to your `.eslintrc`

**Tips:**
Make sure to put `"dsx-base/prettier"` at the end of `"extends"` list.
