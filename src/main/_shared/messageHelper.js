const ipcMain = require('electron').ipcMain


const listenTo = (name, callback) => ipcMain.on(name, callback)

const send = event => (name, payload) => {
  if (event.window) {
    event.window.webContents.send(name, { payload })
  } else {
    event.sender.send(name, { payload })
  }
}

module.exports = {
  listenTo,
  send,
}
