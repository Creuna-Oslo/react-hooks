import _slicedToArray from "/Users/jorgenlybeckhansen/dev/react-hooks/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
var cb = React.useCallback;
export default function useCounter() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var _React$useState = React.useState(initialValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  var increase = cb(function () {
    return setCount(function (c) {
      return Math.min(max, c + 1);
    });
  }, [max]);
  var decrease = cb(function () {
    return setCount(function (c) {
      return Math.max(min, c - 1);
    });
  }, [min]);
  return [count, increase, decrease];
}