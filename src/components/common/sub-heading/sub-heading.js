import React from 'react';
import 'components/common/sub-heading/sub-heading.css';

function SubHeading(props) {
  return <h1 className="subHeading"> {props.title}</h1>;
}

export default SubHeading;
