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
      items,
      owner_id,
    } = this.props;

    const reduxItem = items.filter((item) => item._id === _id);
    return (
      <div className="p-4 my-2 bg-info text-light d-flex justify-content-center">
        <p className="m-0 pt-1 mr-2">{reduxItem[0].name}</p>
        {owner_id === ownerId ? (
          <div className="d-flex">
            <DeleteItem id={_id} />
            <UpdateItem id={reduxItem[0]._id} name={name} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  owner_id: state.user.user_id,
  items: state.data.items,
});

export default connect(mapStateToProps, null)(itemCard);
