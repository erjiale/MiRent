import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
// Components
import DeleteItem from "./deleteItem";
import UpdateItem from "./updateItem";

class itemCard extends Component {
  render() {
    const {
      item: { _id, ownerId },
      items,
      owner_id,
    } = this.props;
    // console.log(_id);
    const reduxItem = items.filter((item) => item._id === _id);
    return (
      <div className="bg-info text-light d-flex justify-content-center">
        <p>{reduxItem[0].name}</p>
        {owner_id === ownerId ? (
          <div className="d-flex">
            <DeleteItem id={_id} />
            <UpdateItem id={reduxItem[0]._id} />
            {/* {console.log(_id)} */}
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
