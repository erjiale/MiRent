import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { deleteUser } from "../redux/actions/userActions";

class DeleteUser extends Component {
  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteUser();
  };

  render() {
    return (
      <div>
        <button data-toggle="modal" data-target="#deleteModal">
          Delete Account
        </button>

        <div className="modal" id="deleteModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Confirm you want to delete this account.
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-footer">
                <button className="btn btn-danger" data-dismiss="modal">
                  Cancel
                </button>
                <button
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={this.handleDelete}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteUser })(DeleteUser);
