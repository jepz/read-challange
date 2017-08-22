import React from "react";
import Challenges from "./Challenges";
import Print from "./Print";
import styled from "styled-components";

const Section = styled.section`
  margin: auto;
  width: 750px;
  background-color: #e6e6e6;
`;

const Header = styled.div`
  background-color: #66c7a7; //teal
  margin: auto;
  padding: 20px 50px 20px 50px;
`;

const Title = styled.h1`
  font-family: 'Podkova', sans-serif;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 35px;
`;

const Footer = styled.div`
  background-color: #66c7a7;
  height: 50px;
  width: 100%;
`;

const Button = styled.button`padding: 10px;`;

//TODO: add css-in-js, kolla på https://www.styled-components.com/docs/basics

class App extends React.Component {
  render() {
    return (
      <Section>
        <Header>
          <Title>- Reading Challenge -</Title>
        </Header>
        <Challenges.Challenges />
        <Footer />
      </Section>
    );
  }
}

export default { App };
