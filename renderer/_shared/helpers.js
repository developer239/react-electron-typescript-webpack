import electron from 'electron';


const { remote: { BrowserWindow } } = electron;


const property = (obj, key) => obj && obj.hasOwnProperty(key) ? obj[key] : false;

export const createWindow = (createdWindow) => (name, options) => {
  createdWindow = new BrowserWindow({
    show: false,
    width: property(options, 'width') || 800,
    height: property(options, 'height') || 800,
    toolbar: property(options, 'toolbar') || false,
    resizable: property(options, 'resizable') || true,
  });

  createdWindow.setResizable(true);
  createdWindow.loadURL('file://' + __dirname + `/../../renderer/${name}/index.html`);

  createdWindow.once('ready-to-show', () => {
    createdWindow.show();
  });

  createdWindow.on('closed', () => {
    createdWindow = null;
  });
};
