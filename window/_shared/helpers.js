import electron from 'electron';
import { createWindow as createNewWindow } from '../../_shared/windowHelper';


const { BrowserWindow } = electron;


export const createWindow = createNewWindow(BrowserWindow);
