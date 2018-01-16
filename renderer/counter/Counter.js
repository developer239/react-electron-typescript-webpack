import React, { Component } from 'react'
import styled from 'styled-components'

import { send } from '../_shared/messageHelper'


const Container = styled.div`
  padding: 20px 20px
`

const Button = styled.button`
  width: 100%;
  margin: 10px 0;
`

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

  handleInputChange = event => this.setState({ value: event.target.value })

  render() {
    const value = this.state.value

    return (
      <Container>
        <Button onClick={this.handleButtonClick('counter-increment')}>Increment</Button>
        <br />
        <Button onClick={this.handleButtonClick('counter-decrement')}>Decrement</Button>
        <label>Set Directly: </label>
        <input
          type="number"
          value={value}
          onChange={this.handleInputChange}
        /> <br />
        <Button onClick={this.handleSetDirectly}>Save</Button>
      </Container>
    )
  }
}
