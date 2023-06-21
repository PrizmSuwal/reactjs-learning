import './field.css';
import React from 'react';

function FieldName(props) {
  return <label className="label"> {props.label}</label>;
}

export default FieldName;
