import React, { Component } from "react";

class App extends Component {
  render() {
    var {children}  =  this.props;
    return (
      <h3>
        <span className="badge amber darken-2">{children}</span>
      </h3>
    );
  }
}
export default App;
