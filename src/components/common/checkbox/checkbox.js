import './checkbox.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <input type="checkBox" className="checkbox" name="rememberMe" checked={isChecked} onChange={handleCheckboxChange} />
      <span className="label">{props.name}</span>
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired
};

export default Checkbox;
