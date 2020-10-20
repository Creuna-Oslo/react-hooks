import _slicedToArray from "/Users/jorgenlybeckhansen/dev/react-hooks/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useCallback } from 'react';
export default function useToggle(initiallyActive) {
  var _React$useState = React.useState(initiallyActive),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isActive = _React$useState2[0],
      setIsActive = _React$useState2[1];

  var toggle = useCallback(function () {
    return setIsActive(function (isActive) {
      return !isActive;
    });
  }, []);
  var activate = useCallback(function () {
    return setIsActive(true);
  }, []);
  var deactivate = useCallback(function () {
    return setIsActive(false);
  }, []);
  return [isActive, toggle, deactivate, activate];
}