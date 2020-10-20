import React from 'react';
/** Calls the provided `callback` when the component is unmounting */

export default function useOnUnmount() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  React.useEffect(function () {
    return callback;
  }, []);
}