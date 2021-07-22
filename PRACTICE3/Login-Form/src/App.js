import React, { Component } from "react";
import "./App.css";
import Label from "./Form/label";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Label />
      </div>
    );
  }
}

export default App;
