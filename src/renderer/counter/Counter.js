import React from 'react'
import PropTypes from 'prop-types'
import { compose, withState, withHandlers } from 'recompose'
import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_SET_VALUE } from '../../_shared/constants'
import { send } from '../_shared/messageHelper'
import {
  Container,
  Content,
  Button,
  Input,
} from '../_shared/components'


const Counter = ({
  handleIncrement,
  handleDecrement,
  handleClearValue,
  inputValue,
  handleInputChange,
  handleSetDirectly,
}) => (
  (
    <Container>
      <Content>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleClearValue}>Clear</Button>
        Set Directly:
        <Input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        /> <br />
        <Button onClick={handleSetDirectly}>Save</Button>
      </Content>
    </Container>
  )
)

Counter.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleClearValue: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSetDirectly: PropTypes.func.isRequired,
}

const enhance = compose(
  withState('inputValue', 'setInputValue', 0),
  withHandlers({
    handleIncrement: () => () => send(COUNTER_INCREMENT),
    handleDecrement: () => () => send(COUNTER_DECREMENT),
    handleSetDirectly: ({ inputValue, setInputValue }) => () => {
      send(COUNTER_SET_VALUE, inputValue)
      setInputValue(0)
    },
    handleInputChange: ({ setInputValue }) => event =>
      setInputValue(parseInt(event.target.value, 10)),
    handleClearValue: ({ setInputValue }) => () => {
      send(COUNTER_SET_VALUE, 0)
      setInputValue(0)
    },
  }),
)

export default enhance(Counter)
