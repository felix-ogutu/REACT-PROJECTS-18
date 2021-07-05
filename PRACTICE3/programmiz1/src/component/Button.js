import { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="button">
        <button
          className="all-clear"
          name="C"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          C
        </button>
        <button name="%" onClick={(e) => this.props.onClick(e.target.name)}>
          %
        </button>
        <button
          className="back-space"
          name="BS"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          BS
        </button>
        <button name="/" onClick={(e) => this.props.onClick(e.target.name)}>
          /
        </button>

        <br></br>
        <button name="7" onClick={(e) => this.props.onClick(e.target.name)}>
          7
        </button>
        <button name="8" onClick={(e) => this.props.onClick(e.target.name)}>
          8
        </button>
        <button name="9" onClick={(e) => this.props.onClick(e.target.name)}>
          9
        </button>
        <button name="X" onClick={(e) => this.props.onClick(e.target.name)}>
          X
        </button>
        <br></br>
        <button name="4" onClick={(e) => this.props.onClick(e.target.name)}>
          4
        </button>
        <button name="5" onClick={(e) => this.props.onClick(e.target.name)}>
          5
        </button>
        <button name="6" onClick={(e) => this.props.onClick(e.target.name)}>
          6
        </button>
        <button name="-" onClick={(e) => this.props.onClick(e.target.name)}>
          -
        </button>
        <br></br>
        <button name="1" onClick={(e) => this.props.onClick(e.target.name)}>
          1
        </button>
        <button name="2" onClick={(e) => this.props.onClick(e.target.name)}>
          2
        </button>
        <button name="3" onClick={(e) => this.props.onClick(e.target.name)}>
          3
        </button>
        <button name="+" onClick={(e) => this.props.onClick(e.target.name)}>
          +
        </button>
        <br></br>
        <button name="00" onClick={(e) => this.props.onClick(e.target.name)}>
          00
        </button>
        <button name="0" onClick={(e) => this.props.onClick(e.target.name)}>
          0
        </button>
        <button name="." onClick={(e) => this.props.onClick(e.target.name)}>
          .
        </button>
        <button
          className="equal-sign"
          name="="
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          =
        </button>
      </div>
    );
  }
}
export default Button;
