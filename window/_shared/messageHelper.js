import { ipcMain } from 'electron';


export const listenTo = (name, callback) => ipcMain.on(name, callback);
