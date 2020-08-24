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
    this.setState({ itemName: "" });
    document.getElementById("closeButton").click();
    // console.log(document.getElementById("closeButton"));
  };

  render() {
    const { itemName } = this.state;

    return (
      <div>
        <button
          type="button"
          className="btn btn-primary my-2"
          data-toggle="modal"
          data-target="#createItemModal"
        >
          ADD ITEM
        </button>

        <div className="modal" id="createItemModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Post a New Item</h4>
                <button
                  id="closeButton"
                  type="button"
                  className="close"
                  data-dismiss="modal"
                >
                  &times;
                </button>
              </div>
              <form>
                <div className="form-group row m-2">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="itemName"
                      name="itemName"
                      value={itemName}
                      onChange={this.handleTextChange}
                      className="form-control"
                      required
                      placeholder="Item Name"
                    />
                  </div>
                </div>
              </form>
              <div className="modal-footer center">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                  Post
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
