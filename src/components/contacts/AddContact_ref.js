//  Uncontrolled Components & Refs

import React, { Component } from 'react'

class AddContact extends Component {

  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    name: 'Bob Bylan',
    email: 'Bob_Bylan@mai.com',
    phone: '111-11-11'
  }

  handleSubmit(e) {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
    console.log(contact);
  }

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control form-control-lg"
                name="name"
                type="text"
                defaultValue={name}
                ref={this.nameInput}

              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control form-control-lg"
                name="email"
                type="email"
                defaultValue={email}
                ref={this.emailInput}

              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone</label>
              <input
                className="form-control form-control-lg"
                name="phone"
                type="text"
                defaultValue={phone}
                ref={this.phoneInput}

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
  }


}
export default AddContact;