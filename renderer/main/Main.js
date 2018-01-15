import React, { Component } from 'react';
import styled from 'styled-components';

import { createWindow } from '../_shared/windowHelper';


const Container = styled.div`
  padding: 0 20px;
`;

export default class Main extends Component {
  handleButtonClick() {
    createWindow(null)('counter', {
      width: 200,
      height: 200,
    });
  };

  render() {
    return (
      <Container>
        <h1>Hello World!</h1>
        <p>From minimal electron, es6, react application.</p>
        <h2>Counter</h2>
        <label>Current value: </label>value <br />
        <button onClick={this.handleButtonClick}>Open Counter</button>
      </Container>
    );
  }
}
