import React from 'react'
import ReactDOM from 'react-dom'
import { MainWindow } from './MainWindow'

const mainElement = document.createElement('div')
document.body.appendChild(mainElement)

const render = (Component: () => JSX.Element) => {
  ReactDOM.render(<Component />, mainElement)
}

render(MainWindow)
