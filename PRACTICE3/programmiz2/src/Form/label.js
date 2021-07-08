import React, { Component } from "react";
class Label extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <h1>Register With Us</h1>
          <label className="container-label">Enter Full Name:</label>
          <input type="text" placeholder="Enter full name" />
          <br></br>
          <label className="container-label">Enter Username :</label>
          <input type="text" placeholder="Enter username" />
          <br></br>
          <label className="container-label">Enter Email:</label>
          <input type="email" placeholder="Enter email" />
          <br></br>
          <label className="container-label">Enter Password :</label>
          <input type="password" placeholder="Enter password" />
          <br></br>
          <label className="container-label">Confirm Password:</label>
          <input type="password2" placeholder="Confirm password" />
          <br></br>
          <div>
            <label className="container-radio1">Gender</label>
            <input type="radio" value="Male" name="gender" />
            <label className="container-radio2">Male</label>
            <input type="radio" value="Female" name="gender" />
            <label className="container-radio2">Female</label>
            <input type="radio" value="Other" name="gender" />
            <label className="container-radio3">Other</label>
          </div>
          <label className="container-checkbox">93+172 :</label>
          <input type="text" placeholder="Enter result" />
          <br></br>
          <input type="checkbox" />
          <label>Agree with the terms and conditions</label>
        </form>
      </div>
    );
  }
}

export default Label;
