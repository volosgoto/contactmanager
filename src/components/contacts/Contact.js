import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = { showContactInfo: false };

  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  onShowClick = (name, e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick.bind(this, name)}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "black" }}
                />
              </h4>
              {showContactInfo && (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.bool.isRequired,
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;
