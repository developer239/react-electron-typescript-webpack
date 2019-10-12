import { app } from 'electron'
import { installExtensions } from './helpers/extensionsHelper'
import './windows/main'
import './windows/game'

app.on('ready', async () => {
  await installExtensions()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
