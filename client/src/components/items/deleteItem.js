import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { deleteItem } from "../../redux/actions/dataActions";

class DeleteItem extends Component {
  handleDelete = (event) => {
    this.props.deleteItem(this.props.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDelete} className="btn btn-danger">
          &times; Delete
        </button>
      </div>
    );
  }
}

const mapActionToProps = {
  deleteItem,
};

export default connect(null, mapActionToProps)(DeleteItem);
