import React from 'react'
import ReactDOM from 'react-dom'
import { GameWindow } from './GameWindow'

const mainElement = document.createElement('div')
document.body.appendChild(mainElement)

const render = (Component: () => JSX.Element) => {
  ReactDOM.render(<Component />, mainElement)
}

render(GameWindow)
