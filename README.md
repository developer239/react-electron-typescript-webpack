[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://www.typescriptlang.org/)

# React Electron Typescript Webpack

 Javascript meets desktop. Electron with your favorite frontend libraries: react and styled-components.
 
 Build process for common operating systems is included.
 
 ## Development
 
 Project file system should be self explanatory. Both **main and renderer process files are compiled by webpack and watched**.
 
 However if you need to have more than 1 renderer window then things become more complicated.
 
 1) import all windows files in `src/main/index.ts`
 2) create webpack config in `webpack/renderer` (use `webpack/renderer/main` as template)
 3) change scripts in `package.json` accordingly
 
 It would be interesting to create this setup dynamic so that it would support `n` windows. However, after finishing it I am honestly not sure if `typescript` + `webpack` + `electron` is a good idea. 🤔 `babel` and `nodemon` would probably make all of this easier.
 
 ## Useful Commands

 #### Development
 - `yarn start-renderer:dev` start webpack dev server and watch renderer files changes
 - `yarn start-main:dev` start nodemon and watch main process file changes

 #### Deployment
 - `yarn build` build static javascript files
 - `yarn dist` generate release distribution files
 - `yarn start` start electron and use production static javascript files

 #### Code Quality Tools
 - `yarn lint:ts` lint TS files
 - `yarn lint:css` lint CSS
 
 ## Known Issues 

  - Installing `electron@5` [breaks webpack-dev-server](https://github.com/electron/electron/issues/17208#event-2176872582).
