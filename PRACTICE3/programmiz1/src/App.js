//import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Button from "./component/Button";
import Result from "./component/Result";
import Header from "./component/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  //Function to perform the onclick operation
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "BS") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  //lines of code to perform the calculation and giving the result to the screen
  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };
  reset = () => {
    this.setState({
      result: "",
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  render() {
    return (
      <div className="calculator-body">
        <Header />
        <Result result={this.state.result} />
        <Button onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
