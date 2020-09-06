import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { createItem } from "../../redux/actions/dataActions";
// REACT Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CreateItem extends Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      show: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      name: this.state.itemName,
    };
    this.props.createItem(item);
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
      itemName: "",
    });
  };
  render() {
    const { itemName, show } = this.state;

    return (
      <div>
        <Button onClick={this.handleShow}>
          <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Post Item
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post a New Item</Modal.Title>
          </Modal.Header>
          <Container className="my-3">
            <Row>
              <Col sm="3">
                <p className="pt-1 text-center">Name:</p>
              </Col>
              <Col>
                <Form.Control
                  value={itemName}
                  name="itemName"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                ></Form.Control>
              </Col>
            </Row>
          </Container>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="warning" onClick={this.handleSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapActionsToProps = {
  createItem,
};

export default connect(null, mapActionsToProps)(CreateItem);
