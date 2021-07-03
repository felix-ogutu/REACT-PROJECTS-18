import { Component } from "react";

class MyForm extends Component {
  render() {
    return (
      <form>
        <h1>Form Handling</h1>
        <p>FirstName:</p>
        <input type="text" />
        <p>LatName:</p>
        <input type="text" />
        <p>Password:</p>
        <input type="password" />
        <p> Confirm Password:</p>
        <input type="password" />
      </form>
    );
  }
}
export default MyForm;
