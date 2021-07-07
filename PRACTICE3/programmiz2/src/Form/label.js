import React, { Component } from "react";
class Label extends Component {
  render() {
    return (
      <div>
        Enter Full Name:
        <input type="text" placeholder="Enter full name" />
        <br></br>
        Enter Username :
        <input type="text" placeholder="Enter username" />
        <br></br>
        Enter Email:
        <input type="email" placeholder="Enter email" />
        <br></br>
        Enter Password :
        <input type="password" placeholder="Enter password" />
        <br></br>
        Confirm Password:
        <input type="password2" placeholder="Confirm password" />
        <br></br>
        <div>
          Gender
          <input type="radio" value="Male" name="gender" />
          Male
          <input type="radio" value="Female" name="gender" />
          Female
          <input type="radio" value="Other" name="gender" />
          Other
        </div>
        93+172 :
        <input type="text" placeholder="Enter result" />
        <br></br>
        <input type="checkbox" />
        Agree with the terms and conditions
      </div>
    );
  }
}

export default Label;
