const BrowserWindow = require('electron').BrowserWindow


const property = (obj, key) => obj && obj.hasOwnProperty(key) ? obj[key] : undefined

const generateWindowObject = () => ({
  isOpen: false,
  window: null,
})

const createWindow = windowReference => (name, options, special) => {
  const newWindow = new BrowserWindow({
    show: false,
    width: property(options, 'width') || 600,
    height: property(options, 'height') || 600,
    x: property(options, 'x') || 0,
    y: property(options, 'y') || 0,
  })

  newWindow.setResizable(true)
  newWindow.loadURL(`file://${__dirname}/../../renderer/${name}/index.html`)
  newWindow.once('ready-to-show', newWindow.show)

  if (special && special.touchBar) {
    newWindow.setTouchBar(special.touchBar)
  }

  // Handle close window
  newWindow.on('closed', () => {
    windowReference.isOpen = false
    windowReference.window = null
  })

  // Handle open window
  windowReference.isOpen = true
  windowReference.window = newWindow

  return newWindow
}

module.exports = {
  property,
  generateWindowObject,
  createWindow,
}
