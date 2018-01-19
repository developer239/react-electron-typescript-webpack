import { app } from 'electron'
import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_SET_VALUE } from '../../_shared/constants'
import { createWindow, generateWindowObject } from '../_shared/windowHelper'
import { listenTo, send } from '../_shared/messageHelper'
import createTouchBar from '../_shared/touchBarHelper'


// We need to keep reference to this object
const mainWindow = generateWindowObject()

const touchBar = createTouchBar(mainWindow)

const createMainWindow = () => createWindow(mainWindow)(
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
listenTo(COUNTER_INCREMENT, () => {
  send(mainWindow)(COUNTER_INCREMENT)
})

// Handle decrement counter
listenTo(COUNTER_DECREMENT, () => {
  send(mainWindow)(COUNTER_DECREMENT)
})

// Handle set counter value
listenTo(COUNTER_SET_VALUE, (event, args) => {
  send(mainWindow)(COUNTER_SET_VALUE, args.payload)
})

// Create main window when application is ready
app.on('ready', createMainWindow)

// Create main window when application is not active anymore
app.on('activate', () => {
  if (!mainWindow.isOpen) {
    createMainWindow()
  }
})
