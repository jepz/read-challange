import React from "react";

import styled from "styled-components";

//TODO: add css-in-js, kolla på https://www.styled-components.com/docs/basics

class view extends React.Component {
  onClick(eventArgs) {
    //change the Book name and input filed to a text field.
    console.log("checked!");
  }
  render() {
    return (
      <div className="bookItem">
        <form>
          <label>
            <input type="checkbox" />
            Challenge text
          </label>
          <br />
          <label>
            <input type="text" value="The books title" />
          </label>
          <button onClick={this.onClick}>Check</button>
        </form>
      </div>
    );
  }
}

export default { view };
