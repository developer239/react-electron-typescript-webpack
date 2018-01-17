import React, { Component } from 'react'
import { send } from '../_shared/messageHelper'
import Container from '../_shared/components/Container'
import Content from '../_shared/components/Content'
import Button from '../_shared/components/Button'
import Input from '../_shared/components/Input'


export default class Counter extends Component {
  constructor() {
    super()

    this.state = {
      value: 0,
    }
  }

  handleButtonClick = type => () => send(type)

  handleSetDirectly = () => {
    send('counter-set-value', this.state.value)
    this.setState({ value: 0 })
  }

  handleInputChange = event => this.setState({ value: parseInt(event.target.value, 10) })

  handleClearValue= () => {
    send('counter-set-value', 0)
    this.setState({ value: 0 })
  }

  render() {
    const value = this.state.value

    return (
      <Container>
        <Content>
          <Button onClick={this.handleButtonClick('counter-increment')}>Increment</Button>
          <Button onClick={this.handleButtonClick('counter-decrement')}>Decrement</Button>
          <Button onClick={this.handleClearValue}>Clear</Button>
          Set Directly:
          <Input
            type="number"
            value={value}
            onChange={this.handleInputChange}
          /> <br />
          <Button onClick={this.handleSetDirectly}>Save</Button>
        </Content>
      </Container>
    )
  }
}
