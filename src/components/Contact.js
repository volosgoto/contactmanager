import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = { showContactInfo: false };

  static propTypes = {
    contact: PropTypes.object.isRequired
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired
  };

  onShowClick = (name, e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  render() {
    // const { name, email, phone } = this.props;
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onShowClick.bind(this, name)}
            className="fas fa-sort-down"
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
  }
}

// Contact.propTypes = {
//   name: PropTypes.bool.isRequired,
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;
