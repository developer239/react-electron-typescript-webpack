import { app } from 'electron';
import { createWindow } from '../_shared/helpers';


let mainWindow = null;

const createMainWindow = () => createWindow(mainWindow)('main');


app.on('ready', createMainWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
