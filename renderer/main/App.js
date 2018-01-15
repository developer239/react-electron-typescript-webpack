import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  padding: 0 20px;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <h1>Hello World!</h1>
        <p>From minimal electron, es6, react application.</p>
      </Container>
    );
  }
}
