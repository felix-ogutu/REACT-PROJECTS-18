import { Component } from "react";
class Demo1 extends Component {
  render() {
    return (
      <div>
        <button value="hello!" onClick={(e) => alert(e.target.value)}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default Demo1;
