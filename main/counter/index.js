import { createWindow, generateWindowObject } from '../_shared/windowHelper'
import { listenTo } from '../_shared/messageHelper'


// We need to keep reference to this object
const counterWindow = generateWindowObject()

const createMainWindow = () => createWindow(counterWindow)('counter', {
  x: 450,
  y: 0,
  width: 300,
  height: 350,
  resizable: false,
})

// Create counter window on `Open Counter` button click
listenTo('open-counter-window', () => {
  if (!counterWindow.isOpen) {
    createMainWindow()
  }
})
