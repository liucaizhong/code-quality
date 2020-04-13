# eslint-config-dsx-base

This package provides DSX's base JS .eslintrc (without React plugins) as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-dsx-base@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-dsx-base
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-dsx-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

2. Add "extends": "dsx-base" to your .eslintrc.
