import React from "react";
import Books from "./Books";
import styled from "styled-components";

const Section = styled.div`
  margin: auto;
  width: 50%;
`;

const Header = styled.div`
  background-color: #66c7a7;
  height: 200px;
  width: 500px;
`;

const Title = styled.h1`
  font-family: 'Podkova', sans-serif;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;

//TODO: add css-in-js, kolla på https://www.styled-components.com/docs/basics

class App extends React.Component {
  render() {
    return (
      <Section>
        <Header>
          <Title>- Reading Challenge -</Title>
        </Header>
        <Books.Books />
      </Section>
    );
  }
}

export default { App };
