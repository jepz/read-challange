import React from "react";
import BookItem from "./BookItem";
import styled from "styled-components";

const Section = styled.div`
  margin: auto;
  width: 50%;
`;

const Title = styled.h1`
  color: red;
  text-transform: uppercase;
  font-weight: bold;

  &:first-line {
    font-weight: lighter;
    letter-spacing: 10px;
  }
`;

//TODO: add css-in-js, kolla på https://www.styled-components.com/docs/basics

class App extends React.Component {
  render() {
    return (
      <Section>
        <Title>
          Reading <br />challenge
        </Title>
        <BookItem.view />
      </Section>
    );
  }
}

export default { App };
