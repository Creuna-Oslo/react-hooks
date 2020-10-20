import _slicedToArray from "/Users/jorgenlybeckhansen/dev/react-hooks/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import { useState, useEffect } from 'react';

var useDebounce = function useDebounce(value, delay) {
  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  useEffect(function () {
    var token = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(token);
    };
  }, [value]);
  return debouncedValue;
};

export default useDebounce;