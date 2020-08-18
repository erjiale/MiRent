import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { getAllItems } from "../redux/actions/dataActions";

class home extends Component {
  handleDisplay = (event) => {
    if (event.target.value === "list") {
      console.log("hello");
    }
  };

  componentDidMount() {
    this.props.getAllItems();
  }

  componentDidUpdate() {
    this.props.getAllItems();
  }

  render() {
    const { authenticated, items } = this.props;

    return (
      <div>
        {/* {authenticated ? (
          <div>
            <h2>actions</h2>
            <ul>
              <li>
                <button value="list" onClick={this.handleDisplay}>
                  List
                </button>
              </li>
              <li>
                <button value="post" onClick={this.handleDisplay}>
                  Create Post
                </button>
              </li>
            </ul>
        <div id="container"></div>
          </div>
        ) : (
          <p> othersaddasdsasadsda</p>
        )} */}
        {items.map((item) => (
          <p key={item._id}>{item.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  items: state.data.items,
});

const mapActionsToProps = {
  getAllItems,
};

export default connect(mapStateToProps, mapActionsToProps)(home);
