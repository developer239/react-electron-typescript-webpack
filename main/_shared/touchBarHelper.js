import { TouchBar } from 'electron'
import { send } from './messageHelper'


const { TouchBarButton } = TouchBar

const createTouchBar = browserWindow => {
  const incrementButton = new TouchBarButton({
    label: '🔼 increment',
    click: () => send(browserWindow)('counter-increment'),
  })

  const decrementButton = new TouchBarButton({
    label: '🔽 decrement',
    click: () => send(browserWindow)('counter-decrement'),
  })

  const clearButton = new TouchBarButton({
    label: '🚮 clear',
    click: () => send(browserWindow)('counter-set-value', 0),
  })

  return new TouchBar([
    incrementButton,
    decrementButton,
    clearButton,
  ])
}

export default createTouchBar
