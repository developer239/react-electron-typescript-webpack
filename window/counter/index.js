import { createWindow } from '../_shared/windowHelper';
import { listenTo } from '../_shared/messageHelper';


let counterWindow = null;

const createMainWindow = () => createWindow(counterWindow)('counter');


listenTo('open-settings-window', createMainWindow);
