import React, { Component } from 'react';
import styled from 'styled-components';

import { send } from '../_shared/messageHelper';


const Container = styled.div`
  padding: 20px 20px
`;

const Button = styled.button`
  width: 100%;
  margin: 10px 0;
`;

export default class Main extends Component {
  handleButtonClick = (type) => () => send(type)

  render() {
    return (
      <Container>
        <Button onClick={this.handleButtonClick('increment')}>Increment</Button>
        <br />
        <Button onClick={this.handleButtonClick('decrement')}>Decrement</Button>
      </Container>
    );
  }
}
