import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { deleteUser } from "../redux/actions/userActions";

class DeleteUser extends Component {
  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteUser();
  };
  handleClick = (event) => {
    event.preventDefault();
    // document.getElementById("deleteModalBox").style.display = "flex";
    // console.log(document.getElementsByClassName("modal"));
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn text-danger"
          data-toggle="modal"
          data-target="#deleteModalBox"
          onClick={this.handleClick}
        >
          <i
            className="fa fa-trash"
            style={{ color: "red" }}
            aria-hidden="true"
          ></i>
          &nbsp;Delete Account
        </button>

        <div
          className="modal fade"
          id="deleteModalBox"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="deleteModalBoxTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Confirm you want to delete this account.
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-info"
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
