import React from "react";
import styled from "styled-components";

const Bookitem = styled.li`
  list-style: none;
  width: 341px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  padding: 10px 10px 0 30px;
  font-size: 13px;
  :nth-child(odd) {
    padding-left: 48px;
  }

  > form {
    text-align: left;
  }
`;

function BookItem(props) {
  return (
    <Bookitem>
      <form>
        <label>
          <input type="checkbox" />
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
