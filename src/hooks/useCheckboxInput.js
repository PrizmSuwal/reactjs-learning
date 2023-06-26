import { useState } from 'react';

export function useCheckBoxInput() {
  const [checked, setCheckbox] = useState(false);

  function handleCheckbox(event) {
    setCheckbox(event.target.checked);
  }

  return {
    checked,
    onChange: handleCheckbox
  };
}
