import _slicedToArray from "/Users/jorgenlybeckhansen/dev/react-hooks/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import { useCallback, useState, useEffect } from 'react';
/**
 * Simply returns width and height of the current window viewport.
 * Sets up a useEffect which updates when the viewport dimensions changes
 * @returns {{width: (number), height: (number)}}
 */

export function useWindowSize() {
  var isClient = typeof window === 'object';
  var getSize = useCallback(function () {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }, [isClient]);

  var _useState = useState(getSize),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  useEffect(function () {
    if (!isClient) {
      return null;
    }

    var handleResize = function handleResize() {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, [isClient, getSize]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}