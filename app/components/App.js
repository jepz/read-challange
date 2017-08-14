import React from "react";
import BookItem from "./BookItem";

//TODO: add css-in-js, kolla på https://www.styled-components.com/docs/basics

class App extends React.Component {
  render() {
    console.log(BookItem);
    return (
      <div className="app">
        <h1>Reading challenge</h1>
        <BookItem.view />
      </div>
    );
  }
}

export default { App };
