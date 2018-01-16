import { app } from 'electron';
import { createWindow, generateWindowObject } from '../_shared/windowHelper';
import { listenTo, send } from '../_shared/messageHelper';


// We need to keep reference to this object
const mainWindow = generateWindowObject();

const createMainWindow = () => createWindow(mainWindow)('main', {
  x: 0,
  y: 0,
});

// Handle increment counter
listenTo('counter-increment', () => {
  send(mainWindow)('counter-increment');
});

// Handle decrement counter
listenTo('counter-decrement', () => {
  send(mainWindow)('counter-decrement');
});

// Handle set counter value
listenTo('counter-set-value', (event, args) => {
  console.log('counter-set-value', args);
  send(mainWindow)('counter-set-value', args.payload);
});

// Create main window when application is ready
app.on('ready', createMainWindow);

// Create main window when application is not active anymore
app.on('activate', () => {
  if (!mainWindow.isOpen) {
    createMainWindow();
  }
});
