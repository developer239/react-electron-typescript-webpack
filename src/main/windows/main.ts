import { app } from 'electron'
import { generateWindowObject, createWindow } from '../helpers/windowHelper'

const mainWindowReference = generateWindowObject()

app.on('ready', () => {
  createWindow(mainWindowReference)('main', {
    x: 0,
    y: 0,
    height: 600,
    width: 600,
  })
})

app.on('activate', () => {
  if (!mainWindowReference.isOpen) {
    createWindow(mainWindowReference)
  }
})
