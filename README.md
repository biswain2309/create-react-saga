<p align="center">
  <a href="https://master.d3knmnietsgia5.amplifyapp.com" target="_blank"><img src="https://cdn.jsdelivr.net/npm/create-react-saga@0.7.7/core/assets/wrs.png" width="320" alt="WRSa logo" /></a>
</p>

<h1 align="center">Create React Saga</h1>

[![NPM](https://img.shields.io/npm/v/create-react-saga.svg)](https://www.npmjs.com/package/create-react-saga)
[![NPM](https://img.shields.io/npms-io/maintenance-score/create-react-saga)](https://github.com/sprakash57/create-react-saga/releases)
[![Downloads](https://img.shields.io/npm/dt/create-react-saga)](https://www.npmjs.com/package/create-react-saga)

`create-react-saga` is a CLI tool for quickly setup your next clutter-free webpack backed React application. It provides you the latest hooks based codebase, testing utilities and storybooks. So if you are thinking of below -
1. Create components ahead of development for early reviews.
2. Want to use Redux-Saga middleware for async calls.
3. Proper testing environment setup for React hooks.

Then you have come to the right place. You will get the most vanilla React experience ever. See the features section for detailed info. 

## 📺 Demo

You can find the live demo of the running boilerplate over <a href="https://live.d3knmnietsgia5.amplifyapp.com/" target="_blank">here</a>

## 🚀 Features
- Written in React 17 with hooks and functional components. Easy to clean bootstrapped codebase with minimal number of dependencies.
- Latest and greatest **Webpack 5**. Configurations included for production and development environments.
- Environment variables support for your secrets.
- JavaScript and TypeScript templates.
- <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">React Testing Library </a> configured for unit testing with example test cases.
- `.babelrc` file provided in case you want to use latest ES6+ features.
- Proper implementation of Redux-Saga for async calls without polluting redux actions. Thanks to <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON placeholder</a> for their open source API.
- Constant maintenance and package updates.
- Redux devtool integration with trace enabled. Download browser extension to track saga calls. For example for Google Chrome you can find it over <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank">here</a>.
- Storybook.js to showcase your component ahead of feature development.

## 💻 Technology Stack

- **React 17**
- **Redux-Saga**
- **Webpack 5**
- **Jest**
- **React Testing Library**
- **Storybook.js**
- **Babel**

## 📙 Documentation
`npx create-react-saga --help` will show you all available options.

<p><img src="https://i.ibb.co/WtWcdZf/help.png" alt="help" border="0"/></p>

> Detailed version of the documentation can be found over <a href="https://sprakash57.github.io/create-react-saga" target="_blank">here</a>

## 🤔 How to use?
```
$ npx create-react-saga my-first-project
$ cd my-first-project
$ npm start
```
Open [localhost:3000](http://localhost:3000) in the Browser.

> npm 5.2+ version is required for npx to work.

## 🌲 Project structure
`create-react-saga` will create below project structure -

```
my-first-project
├── .storybook
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── .babelrc
├── setupTests.js
├── jest.config.js
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── assets
│   ├── favicon.ico
│   └── wrs.png
└── src
    ├── __mocks__
    ├── __tests__
    ├── actions
    ├── common
    ├── components
    ├── libs
    ├── reducers
    ├── sagas
    ├── App.js
    ├── constants.js
    ├── index.html
    ├── index.js
    └── index.scss
```

## ✔ Production build
```
$ npm run build
```

Bundle files can be found in `dist` folder under root directory

## 📚 Storybook
```
$ npm run storybook
```

Open [localhost:6006](http://localhost:6006) in the Browser.

## 📑 License

Create React Saga is open source software [licensed as MIT](https://github.com/sprakash57/create-react-saga/blob/master/LICENSE). The logo is licensed under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
