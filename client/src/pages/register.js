//  Libraries
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
//  Redux
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/userActions";

class register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };

    this.props.registerUser(credentials, this.props.history);
  };

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  clearText = (event) => {
    event.target.value = "";
    this.setState({
      [event.target.name]: "",
    });
  };

  render() {
    const { email, username, password } = this.state;
    const { user } = this.props;

    return (
      <div className="text-center">
        {user.authenticated ? <Redirect to="/" /> : null}
        <h2>Create Your Account</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleTextChange}
          />
          <br />
          <label>Username: </label>
          <br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleTextChange}
          />
          <br />
          <label>Password: </label>
          <br />
          <input
            onFocus={this.clearText}
            type="password"
            name="password"
            value={password}
            onChange={this.handleTextChange}
          />
          <br />
          <button className="btn btn-dark color-white mt-3" type="submit">
            REGISTER
          </button>
          {user.errors ? (
            <p style={{ color: "red" }}>{user.errors.error}</p>
          ) : null}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  registerUser,
};

export default withRouter(
  connect(mapStateToProps, mapActionsToProps)(register)
);
