import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { deleteItem } from "../../redux/actions/dataActions";
// React Bootstrap
import Button from "react-bootstrap/Button";

class DeleteItem extends Component {
  handleDelete = () => {
    this.props.deleteItem(this.props.id);
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleDelete} className="btn-danger">
          <i className="fa fa-times" aria-hidden="true"></i>&nbsp;Delete
        </Button>
      </div>
    );
  }
}

const mapActionToProps = {
  deleteItem,
};

export default connect(null, mapActionToProps)(DeleteItem);
