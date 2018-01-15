import { BrowserWindow } from 'electron';


const property = (obj, key) => obj && obj.hasOwnProperty(key) ? obj[key] : false;

export const createWindow = (createdWindow) => (options) => {
  createdWindow = new BrowserWindow({
    show: false,
    width: property(options, 'width') || 800,
    height: property(options, 'height') || 800,
    toolbar: property(options, 'toolbar') || false,
    resizable: property(options, 'resizable') || true,
  });

  createdWindow.setResizable(true);
  createdWindow.loadURL('file://' + __dirname + '/../renderer/main/index.html');

  createdWindow.once('ready-to-show', () => {
    createdWindow.show();
  });

  createdWindow.on('closed', () => {
    createdWindow = null;
  });
};
