import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  padding: 20px 20px
`;

const Button = styled.button`
  width: 100%;
  margin: 10px 0;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Button>Increment</Button>
        <br />
        <Button>Decrement</Button>
      </Container>
    );
  }
}
