import { app } from 'electron';

import './main/main/index';
import './main/counter/index';


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
