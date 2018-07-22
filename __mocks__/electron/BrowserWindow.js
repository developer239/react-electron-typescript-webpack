class BrowserWindow {
  constructor(options) {
    this.options = options
  }

  setResizable() {
    return jest.fn()
  }

  loadURL() {
    return jest.fn()
  }

  once() {
    return jest.fn()
  }

  on() {
    return jest.fn()
  }

  setTouchBar(touchBar) {
    this.options.touchBar = touchBar
  }
}

module.exports = BrowserWindow
