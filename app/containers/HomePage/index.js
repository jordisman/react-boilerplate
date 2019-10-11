import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../../components/Person';
import AddPerson from '../../components/AddPerson';
import * as actionTypes from './store/actions';

class Persons extends Component {
  render() {
    return (
      <div>
        <h2>This is Home Page</h2>
        <AddPerson personAdded={this.props.onAddedPerson} />
        {this.props.prs.map(person => (
          <Person
            key={person.id}
            name={person.name}
            phone={person.phone}
            clicked={() => this.props.onRemovedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prs: state.persons,
});

const mapDispatchToProps = dispatch => ({
  onAddedPerson: (name, phone) =>
    dispatch({ type: actionTypes.ADD_PERSON, personData: { name, phone } }),
  onRemovedPerson: id =>
    dispatch({ type: actionTypes.REMOVE_PERSON, personId: id }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Persons);
