import React from 'react';
import 'components/common/heading/heading.css';

function Heading(props) {
  return <h1 className="header"> {props.title}</h1>;
}

export default Heading;
