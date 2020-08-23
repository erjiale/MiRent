import React, { Component } from "react";
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { logoutUser, clearErrors } from "../redux/actions/userActions";
// Components
import DeleteUser from "../components/deleteUser";

class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  handleClear = () => {
    this.props.clearErrors();
  };

  render() {
    const { authenticated } = this.props;

    return (
      <nav className="navbar" style={{ backgroundColor: "black" }}>
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            MiRent
          </Link>
        </div>

        {/* AUTHENTICATED */}
        {authenticated ? (
          <div className="nav navbar-right">
            <DeleteUser />

            {/* Toggle Menu */}
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
              >
                {/* GEAR icon */}
                <i
                  className="fa fa-cog"
                  style={{ color: "white" }}
                  aria-hidden="true"
                ></i>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="btn w-100" onClick={this.handleLogout}>
                  <i className="fa fa-power-off" aria-hidden="true"></i>
                  &nbsp;Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          // NOT AUTHENTICATED
          <ul className="nav navbar-right">
            <li>
              <Link
                onClick={this.handleClear}
                to="/login"
                className="text-light"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleClear}
                to="/register"
                className="ml-2 text-danger text-light"
              >
                Create Account
              </Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

const mapActionsToProps = {
  logoutUser,
  clearErrors,
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
