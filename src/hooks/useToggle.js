import { useState } from 'react';

function useToggle(initValue) {
  const [state, setState] = useState(initValue);

  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
}

export default useToggle;
