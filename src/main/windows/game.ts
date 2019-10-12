import { app } from 'electron'
import { generateWindowObject, createWindow } from '../helpers/windowHelper'

const gameWindowReference = generateWindowObject()

app.on('ready', () => {
  createWindow(gameWindowReference)(
    'game',
    {
      x: 0,
      y: 0,
      height: 600,
      width: 600,
    },
    {
      port: 2004,
      fileName: 'game-window.html',
    }
  )
})

app.on('activate', () => {
  if (!gameWindowReference.isOpen) {
    createWindow(gameWindowReference)
  }
})
