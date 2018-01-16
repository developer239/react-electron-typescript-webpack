import { createWindow, generateWindowObject } from '../_shared/windowHelper';
import { listenTo } from '../_shared/messageHelper';


// We need to keep reference to this object
const counterWindow = generateWindowObject();

const createMainWindow = () => createWindow(counterWindow)('counter', {
  x: 600,
  y: 0,
  width: 300,
  height: 400,
});

// Create counter window on `Open Counter` button click
listenTo('open-counter-window', () => {
  if (!counterWindow.isOpen) {
    createMainWindow();
  }
});
