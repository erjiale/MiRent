import React, { Component } from "react";
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import {
  logoutUser,
  deleteUser,
  clearErrors,
} from "../redux/actions/userActions";

class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  handleDeleteUser = () => {
    this.props.deleteUser();
  };

  handleClear = () => {
    this.props.clearErrors();
  };

  render() {
    const { authenticated } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-inverse navbar-styles">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              MiRent
            </Link>
          </div>

          {authenticated ? (
            <div>
              <button onClick={this.handleLogout}>Logout</button>
              <button onClick={this.handleDeleteUser}>Delete Account</button>
            </div>
          ) : (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link onClick={this.handleClear} to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.handleClear}
                  to="/register"
                  className="ml-2 text-danger"
                >
                  Create Account
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

const mapActionsToProps = {
  logoutUser,
  deleteUser,
  clearErrors,
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
