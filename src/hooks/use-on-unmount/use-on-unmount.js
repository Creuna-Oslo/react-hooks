import React from 'react';

/** Calls the provided `callback` when the component is unmounting */
export default function useOnUnmount(callback = () => {}) {
  React.useEffect(() => {
    return callback;
  }, []);
}
