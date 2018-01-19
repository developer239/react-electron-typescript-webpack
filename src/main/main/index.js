const app = require('electron').app
const constants = require('../../_shared/constants')
const windowHelper = require('../_shared/windowHelper')
const messageHelper = require('../_shared/messageHelper')
const createTouchBar = require('../_shared/touchBarHelper')


// We need to keep reference to this object
const mainWindow = windowHelper.generateWindowObject()

const touchBar = createTouchBar(mainWindow)

const createMainWindow = () => windowHelper.createWindow(mainWindow)(
  'main',
  {
    x: 0,
    y: 0,
    height: 620,
    width: 450,
  },
  {
    touchBar,
  },
)

// Handle increment counter
messageHelper.listenTo(constants.COUNTER_INCREMENT, () => {
  messageHelper.send(mainWindow)(constants.COUNTER_INCREMENT)
})

// Handle decrement counter
messageHelper.listenTo(constants.COUNTER_DECREMENT, () => {
  messageHelper.send(mainWindow)(constants.COUNTER_DECREMENT)
})

// Handle set counter value
messageHelper.listenTo(constants.COUNTER_SET_VALUE, (event, args) => {
  messageHelper.send(mainWindow)(constants.COUNTER_SET_VALUE, args.payload)
})

// Create main window when application is ready
app.on('ready', createMainWindow)

// Create main window when application is not active anymore
app.on('activate', () => {
  if (!mainWindow.isOpen) {
    createMainWindow()
  }
})
