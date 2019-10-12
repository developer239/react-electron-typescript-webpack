import path from 'path'
import url from 'url'
import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron'

export interface IWindowReference {
  isOpen: boolean
  window?: BrowserWindow
}

export interface IBrowserWindowConstructorOptionsSpecialOptions {
  fileName: string
  port: number
  url?: string
}

export const generateWindowObject = (): IWindowReference => ({
  isOpen: false,
  window: undefined,
})

export const createWindow = (windowReference: IWindowReference) => (
  name: string,
  options: BrowserWindowConstructorOptions,
  special: IBrowserWindowConstructorOptionsSpecialOptions
) => {
  const newWindow = new BrowserWindow({
    ...options,
    resizable: false,
    width: options.width || 600,
    height: options.height || 600,
  })

  if (process.env.NODE_ENV !== 'production') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'
    newWindow.loadURL(`http://localhost:${special.port}`)
  } else if (special.url) {
    newWindow.loadURL(special.url)
  } else {
    newWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, special.fileName),
        protocol: 'file:',
        slashes: true,
      })
    )
  }

  // Handle close window
  newWindow.on('closed', () => {
    windowReference.isOpen = false
    windowReference.window = undefined
  })

  windowReference.isOpen = true
  windowReference.window = newWindow
}
