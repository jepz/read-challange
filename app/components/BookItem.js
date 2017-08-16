import React from "react";
import styled from "styled-components";

function BookItem(props) {
  return (
    <div className="bookItem">
      <form>
        <label>
          <input type="checkbox" />
          {props.title}
        </label>
        <br />
        <label>
          <input type="text" value="The books title" />
        </label>
        <button>Check</button>
      </form>
    </div>
  );
}

export default BookItem;
