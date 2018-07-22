const TouchBar = require('electron').TouchBar
const constants = require('../../_shared/constants')
const messageHelper = require('./messageHelper')


const TouchBarButton = TouchBar.TouchBarButton

const createTouchBar = browserWindow => {
  const incrementButton = new TouchBarButton({
    label: '🔼 increment',
    click: () => messageHelper.send(browserWindow)(constants.COUNTER_INCREMENT),
  })

  const decrementButton = new TouchBarButton({
    label: '🔽 decrement',
    click: () => messageHelper.send(browserWindow)(constants.COUNTER_DECREMENT),
  })

  const clearButton = new TouchBarButton({
    label: '🚮 clear',
    click: () => messageHelper.send(browserWindow)(constants.COUNTER_SET_VALUE, 0),
  })

  return new TouchBar([
    incrementButton,
    decrementButton,
    clearButton,
  ])
}

module.exports = createTouchBar
