const BrowserWindow = require('./BrowserWindow')
const TouchBar = require('./TouchBar')

module.exports = {
  ipcMain: {
    on: jest.fn(),
  },
  TouchBar,
  BrowserWindow,
}
