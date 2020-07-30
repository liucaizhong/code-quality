# eslint-config-dsx-react

[![npm version](https://badge.fury.io/js/eslint-config-dsx-react.svg)](http://badge.fury.io/js/eslint-config-dsx-react)

This package provides DSX's react .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-dsx-react

Our default export contains all of our react ESLint rules, including ECMAScript 6+.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm i -D eslint-config-dsx-react
  ```

  If using **yarn**, run `yarn add -D eslint-config-dsx-react` for each listed peer dependency.

2. Add "extends": "dsx-react" to your .eslintrc.

### eslint-config/dsx-react/typescript

This entry point enables the linting rules for typecript. To use, add `"extends": ["dsx-react", "dsx-react/typescript"]` to your `.eslintrc`

### eslint-config/dsx-react/prettier

This entry point enables the linting rules for prettier. To use, add `"extends": ["dsx-react", "dsx-react/prettier"]` to your `.eslintrc`

**Tips:**
Make sure to put `"dsx-react/prettier"` at the end of `"extends"` list.
