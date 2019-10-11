import React, { Component } from 'react';

class AddPerson extends Component {
  state = {
    name: '',
    phone: '',
  };

  nameChangedHandler = event => {
    this.setState({ name: event.target.value });
  };

  phoneChangedHandler = event => {
    this.setState({ phone: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={this.nameChangedHandler}
          value={this.state.name}
        />
        <input
          type="number"
          placeholder="Phone Number"
          onChange={this.phoneChangedHandler}
          value={this.state.phone}
        />
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.phone)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
