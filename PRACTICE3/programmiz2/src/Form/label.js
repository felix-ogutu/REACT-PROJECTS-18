import React, { Component } from "react";
class Label extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("/api/form-submit-url", {
      method: "POST",
      body: data,
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {/*Code for the the haeding pf the form */}
          <h1>Register With Us</h1>
          {/*Code for the label and the inputs */}
          <div className="container-label">
            {/**This is the code for Full Name  */}
            <div>
              <label>
                Enter Full Name:
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                />
              </label>
            </div>

            <br></br>
            <div>
              <label>
                Enter Username :
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                />
              </label>
            </div>
            <br></br>
            <label>Enter Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />
            <br></br>
            <div>
              <label>
                Enter Password :
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                />
              </label>
            </div>
            <br></br>
            <div>
              <label>
                Confirm Password:
                <input
                  type="password2"
                  name="password"
                  id="password"
                  placeholder="Confirm password"
                />
              </label>
            </div>
            <br></br>
          </div>
          {/*Code for the radio button */}
          <div className="container-radio">
            <label>Gender</label>
            <input type="radio" value="Male" name="gender" />
            <label>Male</label>
            <input type="radio" value="Female" name="gender" />
            <label>Female</label>
            <input type="radio" value="Other" name="gender" />
            <label>Other</label>
          </div>
          {/*Code for the checkbox  */}
          <label className="container-checkbox">93+172 :</label>
          <input type="text" placeholder="Enter result" />
          <br></br>
          <input type="checkbox" />
          <label>Agree with the terms and conditions</label>
          {/*Code for the submit button */}
          <div>
            <button>Submit Now</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Label;
