# Electron React

Simple electron application with ES6 react implementation.

__Uses:__

* [Electron](https://github.com/electron/electron) 1.8.2
* [React](https://github.com/facebook/react) 16.2.0
* [React DOM](https://github.com/facebook/react/tree/master/packages/react-dom) 16.2.0
* [Styled Components](https://github.com/styled-components/styled-components) 2.4.0

#### Installing the project

Run
 ```yarn install```
 
![1](https://github.com/developer239/electron-react/blob/master/preview.gif?raw=true)
 
#### Development
 
 I did not implement webpack or any other package solution so hot reloading is not available.
 
 If you change code in the `./renderer` folder then you can reload the page using `⌘Cmd + R.`
 
 If you change code in the `./main` folder you might need to restart the electron application.
 
#### Structure

Code structure is little bit unconventional.

Basically, there are these sections:

__Native environment__:

- `./main` Has all _native_ code in one folder.
- `./main/main` Has all code needed for _main_ application process.
- `./main/counter` Has all code needed for _counter_ application process.
- `./main/_shared` Code that is shared between _native_ application processes.

__Renderer environment__:

- `./main` Has all views for _renderer_.
- `./main/main` Main _view_ folder.
- `./main/counter` Counter _view_ folder.
- `./main/_shared` Code shared between views.
