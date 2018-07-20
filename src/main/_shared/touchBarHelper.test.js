import sinon from 'sinon'
import createTouchBar from './touchBarHelper'


// Require instead of import so that node caches this statement
// and we can override helper function
const messageHelper = require('./messageHelper')

describe('CreateTouchBar', () => {
  const fakeSend = sinon.fake()
  const fakeBrowserWindow = { my: 'window' }

  // Override message helper send function
  messageHelper.send = () => fakeSend

  const TouchBar = createTouchBar(fakeBrowserWindow)

  it('it initializes all buttons', () => {
    expect(TouchBar.buttons.length).toEqual(3)
  })

  it('it sets correct labels to all buttons', () => {
    expect(TouchBar.buttons[0].options.label).toEqual('🔼 increment')
    expect(TouchBar.buttons[1].options.label).toEqual('🔽 decrement')
    expect(TouchBar.buttons[2].options.label).toEqual('🚮 clear')
  })

  it('it sets correct click handlers to all buttons', () => {
    TouchBar.buttons[0].options.click()
    TouchBar.buttons[1].options.click()
    TouchBar.buttons[2].options.click()
    expect(fakeSend.callCount).toEqual(3)
  })
})
