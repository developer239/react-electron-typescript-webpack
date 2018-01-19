import React, { Component } from 'react'
import { send, listenTo } from '../_shared/messageHelper'
import Button from '../_shared/components/Button'
import Container from '../_shared/components/Container'
import Content from '../_shared/components/Content'
import Header from '../_shared/components/Header'
import SubHeader from '../_shared/components/SubHeader'
import Text from '../_shared/components/Text'
import Value from '../_shared/components/Value'


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
