import React from "react";

class view extends React.Component {
  render() {
    return (
      <div className="bookItem">
        <h1>book item</h1>
        <form>
          <label>
            Challenge text
            <input type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default { view };
