const electron = require('electron')

require('./main/main/index')

require('./main/counter/index')

electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron.app.quit()
  }
})
