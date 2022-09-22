import { useState, useEffect } from 'react';

function useLocalStorage(key, initValue) {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key)) ?? initValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;
