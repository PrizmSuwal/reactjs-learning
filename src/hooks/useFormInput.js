import { useState } from 'react';

export function useFormInput() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  const inputProps = {
    value,
    onChange: handleChange
  };

  return inputProps;
}
