import React, { Component } from 'react'
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


export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      counterValue: 0,
    }

    listenTo('counter-increment', () => {
      this.updateCounterValue(this.state.counterValue + 1)
    })

    listenTo('counter-decrement', () => {
      this.updateCounterValue(this.state.counterValue - 1)
    })

    listenTo('counter-set-value', (event, args) => {
      this.updateCounterValue(args.payload)
    })
  }

  updateCounterValue = counterValue => {
    this.setState({ counterValue })
  }

  handleButtonClick = () => send('open-counter-window')

  render() {
    const counterValue = this.state.counterValue

    return (
      <Container>
        <Header>Electron App</Header>
        <Content>
          <Text>Lorem ipsum dolor sit amet, nonumes convenire iracundia no sit, in possit audire cum, in duo mundi
            tantas dolorum. Graeco splendide mei ut. An his doming eirmod disputando, eum tritani meliore ne. Populo
            consequuntur nec cu, eos an accusata neglegentur interpretaris, enim ullamcorper deterruisset eu ius. Nec
            omnium dignissim mediocritatem ut. Possit aliquip deleniti vis ut, ut sea dicat augue adversarium.</Text>
          <SubHeader>Counter</SubHeader>
          Current value <Value>{counterValue}</Value><br />
          <Button onClick={this.handleButtonClick}>Open Counter</Button>
        </Content>
      </Container>
    )
  }
}
