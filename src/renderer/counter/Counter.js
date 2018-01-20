import React, { Component } from 'react'
import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_SET_VALUE } from '../../_shared/constants'
import { send } from '../_shared/messageHelper'
import {
  Container,
  Content,
  Button,
  Input,
} from '../_shared/components'


export default class Counter extends Component {
  constructor() {
    super()

    this.state = {
      inputValue: 0,
    }
  }

  handleButtonClick = type => () => send(type)

  handleSetDirectly = () => {
    send(COUNTER_SET_VALUE, this.state.inputValue)
    this.setState({ inputValue: 0 })
  }

  handleInputChange = event => this.setState({ inputValue: parseInt(event.target.value, 10) })

  handleClearValue = () => {
    send(COUNTER_SET_VALUE, 0)
    this.setState({ inputValue: 0 })
  }

  render() {
    const value = this.state.inputValue

    return (
      <Container>
        <Content>
          <Button onClick={this.handleButtonClick(COUNTER_INCREMENT)}>Increment</Button>
          <Button onClick={this.handleButtonClick(COUNTER_DECREMENT)}>Decrement</Button>
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
