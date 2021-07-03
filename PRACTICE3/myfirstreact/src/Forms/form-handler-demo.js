import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  //Function onchange
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <form>
        <h1>Hi{this.state.username}</h1>
        <p>Enter your name:</p>
        <input type="text" onChange={this.myChangeHandler} />
      </form>
    );
  }
}
export default Login;
