# React Electron

 Javascript meets desktop. Electron with your favorite frontend libraries: react, styled-components and recompose. Build process for common operating systems included.

#### Main Dependencies

* [electron](https://github.com/electron/electron) 2.0.5
* [react](https://github.com/facebook/react) 16.4.1
* [styled components](https://github.com/styled-components/styled-components) 3.3.3
* [recompose](https://github.com/acdlite/recompose) 0.27.0
* [webpack](https://github.com/webpack/webpack) 4.16.1

#### Code Quality Tools

* [eslint](https://github.com/eslint/eslint) 5.1.0
* [stylelint](https://github.com/stylelint/stylelint) 9.3.0
* [jest](https://github.com/facebook/jest) 23.4.1
* [enzyme](https://github.com/airbnb/enzyme) 3.3.0
* [sinon](https://github.com/sinonjs/sinon) 6.1.4
* [.editorconfig](http://editorconfig.org/)

## Installation

 I recommend using [yarn](https://github.com/yarnpkg/yarn) as package manager.

 ```
$ yarn install
```

## Development

```bash
$ yarn start
```
 
 If you change code in the `./renderer` folder then you can reload the page using `⌘Cmd + R.`
 
 If you change code in the `./main` folder you might need to restart the electron application.
 

## Building the project

 You have to build static javascript files in `/dist` folder.

```bash
$ yarn build
```

 Then you can run [electron-packager](https://github.com/electron-userland/electron-packager) and create your application.

```bash
$ yarn package-mac
```
 
 Your application is created in `/release-builds` folder.
 
 There are also commands for building linux and windows executable files.

## Structure

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

## Preview

![2](https://github.com/developer239/electron-react/blob/master/previewTouchbar.png?raw=true)
![1](https://github.com/developer239/electron-react/blob/master/preview.gif?raw=true)
