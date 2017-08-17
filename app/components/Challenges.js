import React from "react";
import BookItem from "./BookItem";
import styled from "styled-components";

const Library = styled.ul`
  background-color: #e6e6e6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

var data = [
  "A book wit more than 500 pages",
  "A book you can finish in a day",
  "A classic romance",
  "A book with antonymus in the title"
];

function Books(props) {
  return (
    <Library>
      {props.data.map(function(data) {
        return <BookItem title={data} />;
      })}
    </Library>
  );
}

class Challenges extends React.Component {
  render() {
    return <Books data={data} />;
  }
}

export default { Challenges };
