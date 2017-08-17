import React from "react";
import styled from "styled-components";

const Bookitem = styled.li`
  list-style: none;
  width: 50%;
  > form {
    text-align: left;
  }
`;

function BookItem(props) {
  return (
    <Bookitem>
      <form>
        <input type="checkbox" />
        <label>
          {props.title}
        </label>
        <br />
        <label>
          <input type="text" placeholder="The books title" />
        </label>
        <button type="submit" />
      </form>
    </Bookitem>
  );
}

export default BookItem;
