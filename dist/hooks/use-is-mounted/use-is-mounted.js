import _slicedToArray from "/Users/jorgenlybeckhansen/dev/react-hooks/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
export default function useIsMounted() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isMounted = _React$useState2[0],
      setIsMounted = _React$useState2[1];

  React.useEffect(function () {
    return setIsMounted(true);
  }, []);
  return isMounted;
}