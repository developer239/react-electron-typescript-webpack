import { app } from 'electron';
import { createWindow, generateWindowObject } from '../_shared/windowHelper';


// We need to keep reference to this object
const mainWindow = generateWindowObject();

const createMainWindow = () => createWindow(mainWindow)('main');

// Create main window when application is ready
app.on('ready', createMainWindow);

// Create main window when application is not active anymore
app.on('activate', () => {
  if (!mainWindow.isOpen) {
    createMainWindow();
  }
});
