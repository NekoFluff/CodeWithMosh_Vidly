import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");

    // Save the changes
    // Redirect the user to a different page
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          {this.renderInput("password", "Password", "password")}
          {/* <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkBoxInput"
            />
            <label className="form-check-label" htmlFor="checkBoxInput">
              Check me out
            </label>
          </div> */}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
