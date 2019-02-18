import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Connor",
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
