import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";
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

  doSubmit = async () => {
    // Call the server
    console.log("Submitted login form");

    // Save the changes
    // Redirect the user to a different page
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      // this.props.history.push("/");
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

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
