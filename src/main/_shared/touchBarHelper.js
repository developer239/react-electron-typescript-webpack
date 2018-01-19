import { TouchBar } from 'electron'
import { send } from './messageHelper'
import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_SET_VALUE } from '../../_shared/constants'


const { TouchBarButton } = TouchBar

const createTouchBar = browserWindow => {
  const incrementButton = new TouchBarButton({
    label: '🔼 increment',
    click: () => send(browserWindow)(COUNTER_INCREMENT),
  })

  const decrementButton = new TouchBarButton({
    label: '🔽 decrement',
    click: () => send(browserWindow)(COUNTER_DECREMENT),
  })

  const clearButton = new TouchBarButton({
    label: '🚮 clear',
    click: () => send(browserWindow)(COUNTER_SET_VALUE, 0),
  })

  return new TouchBar([
    incrementButton,
    decrementButton,
    clearButton,
  ])
}

export default createTouchBar
