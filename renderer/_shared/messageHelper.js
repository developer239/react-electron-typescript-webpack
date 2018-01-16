import { ipcRenderer } from 'electron'


export const send = (name, payload) => ipcRenderer.send(name, { payload })

export const listenTo = (name, callback) => ipcRenderer.on(name, callback)
