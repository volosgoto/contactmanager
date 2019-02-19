import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      errors: {}
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

    // Check for Error
    if (name === "") {
      this.setState({
        errors: { name: "Name is Required" }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "Email is Required" }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "Email is Required" }
      });
      return;
    }

    const newContact = {
      // id: uuid(),
      name, // same as name: name
      email,
      phone,
      errors: {}
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users/", newContact)
      .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    // Clear input
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // Redirect after submit
    this.props.history.push("/");
  }

  render() {
    const { name, email, phone, errors } = this.state;
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
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
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
