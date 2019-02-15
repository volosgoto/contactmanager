import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "John_Doe@mail.com",
        phone: "333-33-33"
      },
      {
        id: 2,
        name: "Sara Smith",
        email: "Sara_Smith.com",
        phone: "444-44-44"
      },
      {
        id: 3,
        name: "Bob Williamson",
        email: "Bob Williamson.com",
        phone: "555-55-55"
      }
    ]
  };

  deleteContact = id => {
    console.log(id);
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHendler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
