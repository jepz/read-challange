import React from "react";

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
            Books name: <input type="text" />
          </label>
          <button onClick={this.onClick}>Check</button>
        </form>
      </div>
    );
  }
}

export default { view };
