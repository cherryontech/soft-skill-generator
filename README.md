# EmpowerMe
Cherry On Tech Spring Cohort 2024: Saturn Spinners Squad Project.
EmpowerMe: A site to help users generate relevant soft skills related to their career aspirations.

You can view our live deployment here: [EmpowerMe site](https://empowerme.netlify.app/)

## Deployment Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/678a843c-0add-4fd7-8331-d188405ca866/deploy-status)](https://app.netlify.com/sites/softskill-generator/deploys)

## Overview
This app was created in response to high occurances of imposter syndrome in individuals, who are new to tech, looking to break into software engineering roles.

The targeted user group is:
- non-male-identifying
- ages 30-45
- seeking software engineering roles
- career switchers
- living outside of a tech-centric city (San Francisco, Seattle, New York, Chicago, etc)

This app helps users identify soft skills previously attained in other industries, in order to help applicants feel better prepared and more qualified for engineering roles.

This app is unique in its goal of identifying valuable soft skills with the goal of building confidence in junior developers, rather than seeking to match individuals with specific roles or expose them to job opportunities.

The constraints of this project include not building a BE and only using free technologies.


## Running the Application
This is a simple guide to help you get started with setting up and running the application locally.

Prerequisites
Before you begin, ensure you have the following installed on your system:

- Node.js: Download and install Node.js
- npm (Node Package Manager): npm is installed automatically with Node.js


### Getting Started
- Clone the repository
   - `git clone <repository_url>`
- Navigate to the project directory
   - `cd soft-skill-generator`
- Install dependencies
   - `npm install`


#### Available Scripts
In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server and opens the application in your default web browser.

- `npm run build`: Build the project for production. This script compiles the TypeScript code uses TypeScript compiler ('tsc'), then bundles the application using Vite's 'build' command.

- `npm run lint`: Runs ESLint to check formatting & code consistency.

- `npm run preview`: Starts production server to preview a built project locally. Can be used to test production build before deploying to a live environment.


If you encounter any issues or have questions about the application, feel free to reach out to us or check out the React documentation for more information.



## React + TypeScript + Vite (Generated by Vite)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
