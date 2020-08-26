import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { deleteUser } from "../redux/actions/userActions";
// REACT Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class DeleteUser extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleDelete = (event) => {
    this.props.deleteUser();
    this.handleClose();
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { show } = this.state;

    return (
      <div>
        <Button
          variant="link"
          className="text-danger"
          onClick={this.handleShow}
        >
          <i
            className="fa fa-trash"
            style={{ color: "red" }}
            aria-hidden="true"
          ></i>
          &nbsp;Delete Account
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm You want to delete this account</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              CANCEL
            </Button>
            <Button variant="danger" onClick={this.handleDelete}>
              DELETE
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { deleteUser })(DeleteUser);
