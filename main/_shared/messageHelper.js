import { ipcMain } from 'electron'


export const listenTo = (name, callback) => ipcMain.on(name, callback)

// Chooses whether to use webContents or sender
export const send = event => (name, payload) => {
  if (event.window) {
    event.window.webContents.send(name, { payload })
  } else {
    event.sender.send(name, { payload })
  }
}
