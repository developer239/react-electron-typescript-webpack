import { BrowserWindow } from 'electron';


const property = (obj, key) => obj && obj.hasOwnProperty(key) ? obj[key] : false;

export const createWindow = (createdWindow) => (options) => {
  createdWindow = new BrowserWindow({
    width: property(options, 'width') || 800,
    height: property(options, 'height') || 800,
    toolbar: property(options, 'toolbar') || false,
    resizable: property(options, 'resizable') || true,
  });

  createdWindow.setResizable(true);
  createdWindow.loadURL('file://' + __dirname + '/../renderer/main/index.html');

  createdWindow.on('closed', () => {
    createdWindow = null;
  });
};
