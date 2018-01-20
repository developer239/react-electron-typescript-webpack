# Electron React

Simple electron, react, es6 application. With touch bar implementation. 🎉

__Uses:__

* [Electron](https://github.com/electron/electron) 1.8.2
* [React](https://github.com/facebook/react) 16.2.0
* [React DOM](https://github.com/facebook/react/tree/master/packages/react-dom) 16.2.0
* [Styled Components](https://github.com/styled-components/styled-components) 2.4.0
* [Recompose](https://github.com/acdlite/recompose) 0.26.0

#### Installing the project

![2](https://github.com/developer239/electron-react/blob/master/previewTouchbar.png?raw=true)
![1](https://github.com/developer239/electron-react/blob/master/preview.gif?raw=true)

I recommend using [yarn](https://github.com/yarnpkg/yarn) as package manager.

 ```
$ yarn install
```

#### Building the project

First you have to compile es6 that is used in renderer process.

```bash
$ yarn build
```

This will create `main.js` and `counter.js` files in `./dist` folder.  Then you have ro run [electron-packager](https://github.com/electron-userland/electron-packager).

```bash
$ yarn package-mac
```
 
 You will find final application in `/release-builds`.
 
 There are also prepared commands for building the application for linux `yarn package-linux` and for windows `yarn package-win`.

#### Development

```bash
$ yarn start
```
 
 If you change code in the `./renderer` folder then you can reload the page using `⌘Cmd + R.`
 
 If you change code in the `./main` folder you might need to restart the electron application.
 
#### Structure

Basically, there are two sections:

__Native environment__:

- `./src/main` Has all _native_ code in one folder.
- `./src/main/main` Has all code needed for _main_ application process.
- `./src/main/counter` Has all code needed for _counter_ application process.
- `./src/main/_shared` Code that is shared between _native_ application processes.

__Renderer environment__:

- `./src/main` Has all views for _renderer_.
- `./src/main/main` Main _view_ folder.
- `./src/main/counter` Counter _view_ folder.
- `./src/main/_shared` Code shared between views.

Code that is shared between renderer and native environment lives in `./src/_shared`.
