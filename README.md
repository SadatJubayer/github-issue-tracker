# Github Issue Tracker

A React application to search and view the issues of any Github public repository.

It uses GitHub API to search the issues by GitHub owner name and repository name.

## 📷 ScreenShoot (s)

> Home page

![Home page](https://i.postimg.cc/vZcDcpps/homepage.png)

> Issues list page

![Issues list page](https://i.postimg.cc/4dbxDZhz/issuespage.png)

## 👨‍💻 Installation and Setup Instructions

To run locally, you will need to clone down this repository. You will need `node` and `npm` or `yarn` installed globally on your machine.

You need to export your GitHub token on the `.env` file -

```shell
REACT_APP_GITHUB_TOKEN=YOUR_GITHUB_TOKEN_HERE
```

Install the dependencies

```shell
yarn
```

To run the project locally

```shell
yarn start
```

To run tests

```shell
yarn test
```

To view the test coverage

```shell
yarn test:cov
```

To run eslint and prettier checks

```shell
yarn lint
```

To fix eslint and prettier issues silently

```shell
yarn lint:fix
```

<details>
  <summary> Commands with npm</summary>

Install the dependencies

```shell
npm install
```

To run project locally

```shell
npm start
```

To run tests

```shell
npm test
```

To run test coverage

```shell
npm run test:cov
```

To run eslint and prettier checks

```shell
npm run lint
```

To fix eslint and prettier issues silently

```shell
npm run lint:fix
```

</details>

# 📑 Overview

-   `api/axios.ts` - API caller with Axios with custom configuration.
-   `api/*.ts` - All async functions for APIs calls, separated by a named file.
-   `assets/*` - Application static-asset files (like- icons, images etc.) are here.
-   `components/*` - All application components go here. Separated by folder, which contains the component itself, style modules, and test.
-   `hooks/*` - Custom hooks are here.
-   `pages/*` - All application pages are here. These pages use other components to build the whole page.
-   `router/index.ts` - Application routes are defined here. Used React-Router-Dom v6.
-   `store/*` - Redux files are here. Reduces are separated by slices.
-   `types/*` - Reusable types are here. The component's props types are defined on indivual component itself.
-   `utils/constants.ts` - Constants of the applications are here.
-   `utils/pageBuilder.ts` - Helper function for creating a numbered list of pagination.
-   `utils/strings.ts` - All strings are here, which makes it easy to add i18n.
-   .eslintrc.json: Adds the ESLint configuration for the project.
-   .prettierrc.js: Adds the Prettier configuration for the project.

## 💻 Technical Choices

-   `React`, `TypeScript`, and `Redux` were the requirements.
-   `Axios` - I have used Axios for data fetching. It makes it easy to integrate APIs and has great features like Interceptors, Built-in XSRF protection, etc.
-   `TailwindCSS` - Used tailwind CSS for styling the whole application without writing a single line of custom CSS. It also provided a customizable theme.
-   `classnames` - It helps to make conditional styling. All it is is a single function, taking different values as arguments and spitting out a single string based on them.

## 👌 Improvements

As the time was limited to develop the project, I couldn't make it with all the ideas in my mind. Things I consider adding to make it better -

1. **Data fetching library**: A data-fetching library can be used to better and clean data fetching and caching. My choice would be [React Query](https://react-query.tanstack.com/) or [SWR](https://swr.vercel.app/).

2. **Git Hooks**: Pre-commit hooks can be added to check esLint errors, prettier errors, tests, and build errors. `lint-staged` & `husky` would be a good combination for this.

3. **More Testing**: There are some test cases with the `React Testing Library for the components. Writing more test cases would be great.

## Author

-   [@SadatJubayer](https://www.smjubayer.me)
