import React from 'react';

const person = props => (
  <div onClick={props.clicked}>
    <h1>{props.name}</h1>
    <p>Phone Number: {props.phone}</p>
  </div>
);

export default person;
