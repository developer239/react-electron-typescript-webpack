const constants = require('../../_shared/constants')
const windowHelper = require('../_shared/windowHelper')
const messageHelper = require('../_shared/messageHelper')


// We need to keep reference to this object
const counterWindow = windowHelper.generateWindowObject()

const createMainWindow = () => windowHelper.createWindow(counterWindow)('counter', {
  x: 450,
  y: 0,
  width: 300,
  height: 350,
  resizable: false,
})

// Create counter window on `Open Counter` button click
messageHelper.listenTo(constants.OPEN_COUNTER_WINDOW, () => {
  if (!counterWindow.isOpen) {
    createMainWindow()
  }
})
