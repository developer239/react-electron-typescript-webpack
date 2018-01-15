import { app } from 'electron';
import { createWindow } from '../helpers';


let mainWindow = null;

const createMainWindow = () => createWindow(mainWindow)();


app.on('ready', createMainWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
