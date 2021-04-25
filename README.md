# React UI Template using Material UI

## Motivation

Setting up the react app template usually takes a while, this template will help reduce the time to setup a react ui frontend

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- Node v12.18.0+

## Coding Style guide

- [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript)

  - naming conventions for variables and methods
  - comments
  - etc

- TypeScript style guide is driven by eslint rules in this project

- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
  - code structure
  - etc

## Tech Stack

- Language [TypeScript](https://www.typescriptlang.org/)
- UI Framework [Material UI](https://material-ui.com/)
- Framework [Framework]([https://](https://github.com/facebook/create-react-app))
- View [React](https://react.js)
- Clint side router [Router](https://reach.tech/router))
- Unit Testing Framework: [Jest](https://jestjs.io/)
- Unit Testing Framework for UI:[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- Source Control: [Git](https://git-scm.com/)
- Version control: [Git flow](https://nvie.com/posts/a-successful-git-branching-model/)
- Logging: [LogLevel](https://www.npmjs.com/package/loglevel))
- Performance and Error Monitoring [Sentry](https://sentry.io/)
- Global State Management [React Context](https://reactjs.org/docs/context.html)
- Code Formatting [Prettier](https://prettier.io/)
- CI/CD Flow [Github Action](https://github.com/features/actions)
- Dependency Management [Yarn](https://yarnpkg.com/)
- IDE: VSCode (see below)

## Folder Structure Conventions

===============================

> Folder structure options and naming conventions

### Sample directory layout (group by file type)

[Group by file type](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type)
```
    .
    +-- .github                       # Folder for CI/CD Scripts
    +-- build                         # Compiled files (alternatively `dist`)
    +-- src                           # Source files (alternatively `lib` or `app`)
    |    +-- page                     # The folder reflects the routes of the application. Each component inside this folder has its own route.
    |    |     +-- domain folder      # Folder as logical segmentation of Page Component by domain
    |    +-- component                # The components folder contains a collection of UI components like button, custom input field, modal, etc that will be shared and used across files in the project.
    |    |      +-- domain folder      # Folder as logical segmentation of all components (except for page or container) by domain
    |    |      +-- common             # Folder storing the shared components used by all components (except for container)
    |    +-- constants                # Folder for constant used by the application
    |    +-- contexts                 # Folder for react context and react context provider used by the application, each file represents each domain
    |    +-- hooks                    # Folder for custom react hooks used by the application, each file represents an independent custom hook
    |    +-- layouts                  # Folder for layout component as the container used by the application, each file represents an independent container
    |    +-- resources                # Folder for media resources such as images, videos and etc
    |    +-- data                     # Folder for data used by the application
    |    +-- routers                  # Folder for page routes defined by each domain, each file represents a group of routes belonging to a domain
    |    +-- types                    # Folder for custom types used by the application
    |    +-- utils                    # Folder for utility methods used by the application
    +-- public                        # Automated tests (alternatively `spec` or `tests`)
    +-- package.json                  # Script for managing the project's dependencies, scripts, version and etc.
    +-- .env.SAMPLE                   # Environment Variable
    +-- jest.config.js                # Jest's configuration
    +-- jest.setup.js                 # Jest Setup file
    +-- tsconfig.json                 # TypeScript configuration file
    +-- tsconfig.path.json            # TypeScript configuration subModule for baseUrl
    +-- README.m                      # Description of the project
    +-- yarn.lock                     # The file that is auto-generated and should be handled entirely by Yarn for dependency management
    +-- .eslintrc.json                # Eslint configuration file
    +-- .eslintignore                 # It is a plain text file where each line is a glob pattern indicating which paths should be omitted from linting
    +-- .prettier.config.js           # Prettier Configuration file
    +-- .perttierignore.js            # It is a plain text file where each line is a glob pattern indicating which paths should be omitted from prettier
```
> Use short lowercase names at least for folders

## Prerequisites

### Disable Case-Insensitivity in Git

```
git config --global core.ignorecase false
```

### Node.js, nvm and yarn

- Install node.js with [nvm](https://github.com/creationix/nvm)
- Use [node 12](https://nodejs.org/en/about/releases/) (current node LTS version)

### VSCode Setup

- Install [VSCode](https://code.visualstudio.com/)
- Install [VSCode command line tool](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
- Install the following extensions from command line

  ```sh
  code --install-extension EditorConfig.EditorConfig \
  --install-extension mikestead.dotenv \
  --install-extension dbaeumer.vscode-eslint \
  --install-extension eamodio.gitlens \
  --install-extension streetsidesoftware.code-spell-checker \
  --install-extension esbenp.prettier-vscode
  --install-extension silvenon.mdx
  ```

### IntelliJ WebStorm Setup

- Install [Webstorm](https://www.jetbrains.com/webstorm/download/#section=mac)
- Install [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier) for IDE.
- To set up prettier to lint on save go to `Preferences > Languages & Frameworks > Prettier` select `on Save`.


## 🚀 Quick start

### Start the project (dev)

1. run `yarn`
1. run `yarn start`

## Test the project

1. run `yarn test` for a single run or `yarn test:watch` to update while coding
2. run `yarn test:coverage` to get a coverage report

### Testing production build locally

To test the production build locally,

- Run `yarn serve`

- Open `http://localhost:5000`

### Lint and unit testing

- To format code and run lint `yarn lint`

- To run unit test `yarn test`

### Reporting errors and exceptions

We use [Sentry](https://sentry.io/) to reporting errors and exceptions

### Analysis webpack bundle

- Run `yarn analyze`

## Github secret keys/env variables

### Github secret keys


### Environment variables


## Components

Reusable or shared components go in `src/components/common/`. These are components that are abstracted for reuse in different parts of the applicatioon. Components that are not resusable should be created in their respective module subfolder, e.g. `src/components/return-cast-form`

### About .env

The .env file is named with the pattern: `.env.ENV_NAME`.

List of environments:

- develop
- staging
- production

## Building

Additional build settings can be found in the `package.json`:

- [patch-package](https://github.com/ds300/patch-package) is used to apply custom patches to npm dependencies such as `react-scripts`. We use patches to fix or workaround issues in 3rd party packages that are not included in any official release yet. This runs right after every `npm install` automatically.
- The [browserslist](https://github.com/browserslist/browserslist) entry in defines the list of supported browsers. Changing this value might result in Babel choosing different environment settings when transpiling the project.
- To prevent invalid code from being checked in, commits are checked using [husky](https://www.npmjs.com/package/husky) pre-commit hooks. [lint-staged](https://github.com/okonet/lint-staged) speeds things up by only looking at git staged files.

## Environments & Deployment

Each main branch represents a deployment environment. Merging into the respective branch will automatically trigger the deployment without further intervention necessary:

| Branch        | Environment Name | Description                                               | Environment URL                              |
| ------------- | ---------------- | --------------------------------------------------------- | -------------------------------------------- |
| `development` | Development      | Contains latest feature in development                    | <https://development.domain-name.com/> |
| `main`        | Stage            | Used for pen-testing, and for staging production releases | <https://staging.domain-name.com/>    |
| `main`        | Production       | Official production release                               | <https://google.domain-name.com/>  |


  
