import React, { Component } from 'react';
import styled from 'styled-components';

import { send, listenTo } from '../_shared/messageHelper';


const Container = styled.div`
  padding: 0 20px;
`;

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      counterValue: 0,
    };

    listenTo('counter-increment', () => {
      this.updateCounterValue(this.state.counterValue += 1)
    });

    listenTo('counter-decrement', () => {
      this.updateCounterValue(this.state.counterValue -= 1)
    });

    listenTo('counter-set-value', (event, args) => {
      this.updateCounterValue(args.payload)
    });
  }

  updateCounterValue = (counterValue) => {
    this.setState({ counterValue });
  };

  handleButtonClick = () => send('open-counter-window');

  render() {
    const counterValue = this.state.counterValue;

    return (
      <Container>
        <h1>Electron app</h1>
        <p>From minimal electron, es6, react application.</p>
        <h2>Counter</h2>
        <label>Current value: </label>{counterValue}<br />
        <button onClick={this.handleButtonClick}>Open Counter</button>
      </Container>
    );
  }
}
