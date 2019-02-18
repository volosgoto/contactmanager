import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: ""
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(dispatch, e) {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name, // yaras name: name
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear input
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
