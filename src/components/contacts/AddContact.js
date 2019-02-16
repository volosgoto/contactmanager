import React, { Component } from 'react'

class AddContact extends Component {


  constructor(props) {
    super(props);
    this.state = {
      value: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    let statePropName = e.target.name;
    this.setState({ statePropName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

  }

  render() {

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
                name="textName"
                type="text"
                value={this.state.value}
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
  }







}
export default AddContact;