import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
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
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      className="form-control form-control-lg"
                      name="name"
                      type="text"
                      value={name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control form-control-lg"
                      name="email"
                      type="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">phone</label>
                    <input
                      className="form-control form-control-lg"
                      name="phone"
                      type="text"
                      value={phone}
                      onChange={this.handleChange}
                    />
                  </div>
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
