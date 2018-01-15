import { app } from 'electron';

import './window/main/index';


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
