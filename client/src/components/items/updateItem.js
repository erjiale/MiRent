import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { updateItem } from "../../redux/actions/dataActions";

class UpdateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: this.props.name,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      name: this.state.itemName,
    };
    // console.log(this.state.itemName);

    this.props.updateItem(this.props.id, payload);
    this.setState({
      itemName: "",
    });
    document.getElementById("closeUpdateButton").click();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { itemName } = this.state;

    return (
      <div>
        <div>
          <button
            type="button"
            className="btn btn-warning"
            data-toggle="modal"
            data-target="#UpdateItemModal"
          >
            <i className="fa fa-pencil" aria-hidden="true"></i>
            &nbsp;
          </button>

          <div className="modal" id="UpdateItemModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title text-dark">Update Item</h4>
                  <button
                    id="closeUpdateButton"
                    type="button"
                    className="close"
                    data-dismiss="modal"
                  >
                    &times;
                  </button>
                </div>
                <form>
                  <div className="form-group row m-2">
                    <label className="col-sm-3 col-form-label text-dark">
                      New Name:
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="itemName"
                        value={itemName}
                        onChange={this.handleChange}
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
                  <button
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionsToProps = {
  updateItem,
};

export default connect(null, mapActionsToProps)(UpdateItem);
