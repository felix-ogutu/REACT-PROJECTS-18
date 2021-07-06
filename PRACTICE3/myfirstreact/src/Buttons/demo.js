import React from "react";
//This a demo where we use the button inline function to perform the inline function
function Demo() {
  return (
    <div>
      <button onClick={() => alert("hello")}>Click Me</button>

      <button
        onClick={() => {
          const name = "Felix";

          alert("Hello," + name);
        }}
      >
        Click Here
      </button>

      <button
        onClick={() => {
          let number1 = 23;
          let number2 = 30;
          let sum = number1 + number2;
          alert(sum);
        }}
      >
        Click Here
      </button>
    </div>
  );
}

export default Demo;
