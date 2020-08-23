import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { getAllItems } from "../redux/actions/dataActions";
// Components
import CreateItem from "../components/items/create";

class home extends Component {
  handleDisplay = (event) => {
    if (event.target.value === "list") {
      console.log("hello");
    }
  };

  componentDidMount() {
    this.props.getAllItems();
  }

  render() {
    const { items, authenticated } = this.props;

    return (
      <div className="container">
        {authenticated ? <CreateItem /> : ""}
        {items.map((item) => (
          <p key={item._id}>{item.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.data.items,
  authenticated: state.user.authenticated,
});

const mapActionsToProps = {
  getAllItems,
};

export default connect(mapStateToProps, mapActionsToProps)(home);
