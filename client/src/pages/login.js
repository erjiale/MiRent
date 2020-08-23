import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(credentials, this.props.history);
  };

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  clearText = (event) => {
    event.target.value = "";
  };

  render() {
    const { email, password } = this.state;
    const { user } = this.props;

    return (
      <div className="text-center">
        {user.authenticated ? <Redirect to="/" /> : null}
        {/* Logo here */}
        <h2>Sign In</h2>
        {user.message ? <p style={{ color: "green" }}>{user.message}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleTextChange}
          />
          {/* {user.errors && user.errors.email ? <p>{user.errors.email}</p> : ""} */}
          <br />
          <label>Password:</label>
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
            LOGIN
          </button>
          {/* {console.log(user)} */}
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
  loginUser,
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(login));
