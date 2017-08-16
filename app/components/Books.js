import React from "react";
import BookItem from "./BookItem";

import styled from "styled-components";

const Library = styled.div`background-color: #e6e6e6;`;

class Books extends React.Component {
  render() {
    var text = "test";
    return (
      <Library>
        <BookItem title={text} />
      </Library>
    );
  }
}

export default { Books };
