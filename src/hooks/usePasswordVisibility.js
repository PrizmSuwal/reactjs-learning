import { useState } from 'react';

export function usePasswordVisibility() {
  const [password, setPassword] = useState(true);

  function handlePasswordVisibility() {
    setPassword(!password);
  }

  return {
    state: password,
    onClick: handlePasswordVisibility
  };
}
