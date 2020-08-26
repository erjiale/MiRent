import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { updateItem } from "../../redux/actions/dataActions";
// REACT Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class UpdateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: this.props.name,
    };
  }

  handleSubmit = () => {
    const payload = {
      name: this.state.name,
    };
    this.props.updateItem(this.props.id, payload);
    this.setState({
      show: false,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
      name: this.props.name,
    });
  };

  render() {
    const { show, name } = this.state;
    return (
      <div>
        <Button variant="warning" onClick={this.handleShow}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Item</Modal.Title>
          </Modal.Header>
          <Container className="my-3">
            <Row>
              <Col sm="3">
                <p className="pt-1 text-center">New Name:</p>
              </Col>
              <Col>
                <Form.Control
                  value={name}
                  name="name"
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
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapActionsToProps = {
  updateItem,
};

export default connect(null, mapActionsToProps)(UpdateItem);
