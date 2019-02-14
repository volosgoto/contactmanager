import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>Name: {name}</h4>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
      </div>
    );
  }
}

// Contact.propTypes = {
//   // name: PropTypes.bool.isRequired,
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;
