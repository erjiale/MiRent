import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
// Components
import DeleteItem from "./deleteItem";
import UpdateItem from "./updateItem";

class itemCard extends Component {
  render() {
    const {
      item: { name, _id, ownerId },
      owner_id,
    } = this.props;

    return (
      <div className="bg-info text-light d-flex justify-content-center">
        <p>{name}</p>
        {owner_id === ownerId ? (
          <div className="d-flex">
            <DeleteItem id={_id} />
            <UpdateItem id={_id} name={name} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  owner_id: state.user.user_id,
});

export default connect(mapStateToProps, null)(itemCard);
