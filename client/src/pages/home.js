import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { getAllItems } from "../redux/actions/dataActions";
// Components
import ItemCard from "../components/items/itemCard";
// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class home extends Component {
  componentDidMount() {
    this.props.getAllItems();
  }

  render() {
    const { items, authenticated } = this.props;

    return (
      <div className="container">
        <Container>
          <Row className="d-flex">
            {items.map((item) => (
              <Col sm="4" key={item._id}>
                <ItemCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
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
