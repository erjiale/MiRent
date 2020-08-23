import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { createItem } from "../../redux/actions/dataActions";

class CreateItem extends Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
    };
  }

  handleTextChange = (event) => {
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
    document.getElementById("closeButton").click();
  };

  render() {
    const { itemName } = this.state;

    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#createItemModal"
        >
          ADD ITEM
        </button>

        <div className="modal" id="createItemModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button
                  id="closeButton"
                  type="button"
                  className="close"
                  data-dismiss="modal"
                >
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="itemName">Item being posted: </label>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    value={itemName}
                    onChange={this.handleTextChange}
                    required
                  ></input>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    // data-dismiss="modal"
                  >
                    Post
                  </button>
                </form>
              </div>

              <div className="modal-footer center">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionsToProps = {
  createItem,
};

export default connect(null, mapActionsToProps)(CreateItem);
