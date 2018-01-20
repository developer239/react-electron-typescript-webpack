import React from 'react'
import PropTypes from 'prop-types'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import {
  OPEN_COUNTER_WINDOW,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_SET_VALUE,
} from '../../_shared/constants'
import { send, listenTo } from '../_shared/messageHelper'
import {
  Button,
  Container,
  Content,
  Header,
  SubHeader,
  Text,
  Value,
} from '../_shared/components'


const Main = ({ counterValue, handleButtonClick }) => (
  <Container>
    <Header>Electron App</Header>
    <Content>
      <Text>Lorem ipsum dolor sit amet, nonumes convenire iracundia no sit, in possit audire cum, in duo mundi
        tantas dolorum. Graeco splendide mei ut. An his doming eirmod disputando, eum tritani meliore ne. Populo
        consequuntur nec cu, eos an accusata neglegentur interpretaris, enim ullamcorper deterruisset eu ius. Nec
        omnium dignissim mediocritatem ut. Possit aliquip deleniti vis ut, ut sea dicat augue adversarium.</Text>
      <SubHeader>Counter</SubHeader>
      Current value <Value>{counterValue}</Value><br />
      <Button onClick={handleButtonClick}>Open Counter</Button>
    </Content>
  </Container>
)

Main.propTypes = {
  counterValue: PropTypes.number.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  setCounterValue: PropTypes.func.isRequired, // eslint-disable-line
}

const enhance = compose(
  withState('counterValue', 'setCounterValue', 0),
  withHandlers({
    handleButtonClick: () => () => send(OPEN_COUNTER_WINDOW),
  }),
  lifecycle({
    componentDidMount() {
      const setCounterValue = this.props.setCounterValue
      listenTo(COUNTER_INCREMENT, () => setCounterValue(n => n + 1))
      listenTo(COUNTER_DECREMENT, () => setCounterValue(n => n - 1))
      listenTo(COUNTER_SET_VALUE, (event, args) => setCounterValue(args.payload))
    },
  }),
)

export default enhance(Main)
