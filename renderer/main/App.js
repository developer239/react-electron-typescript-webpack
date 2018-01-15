import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: grey;
  color: black;
`;

export default class Main extends React.Component {
  render() {
    return (
      <Container>
        <div>Hello from React with ES6 :)</div>
      </Container>
    );
  }
}
