import React from "react";
import styled from "styled-components";

const Bookitem = styled.li`
  list-style: none;
  width: 300px;
  font-family: Roboto;
  font-weight: lighter;
  padding: 10px 10px 0 48px;
  font-size: 11px;
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
