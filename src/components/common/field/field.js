import React from 'react';
import 'components/common/field/field.css';

function FieldName(props) {
  return <label className="label"> {props.label}</label>;
}

export default FieldName;
