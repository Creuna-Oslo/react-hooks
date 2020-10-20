import _slicedToArray from "/Users/jorgenlybeckhansen/dev/react-hooks/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
/** Get the position of the mouse cursor relative to the element. Returns `onMouseMove` (function), `x` (number) and `y` (number) */

export default function useRelativeMousePosition() {
  var _React$useState = React.useState([null, null]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      _React$useState2$ = _slicedToArray(_React$useState2[0], 2),
      x = _React$useState2$[0],
      y = _React$useState2$[1],
      setMousePosition = _React$useState2[1];

  var onMouseMove = React.useCallback(function (e) {
    var _e$target$getBounding = e.target.getBoundingClientRect(),
        top = _e$target$getBounding.top,
        left = _e$target$getBounding.left;

    setMousePosition([e.clientX - left, e.clientY - top]);
  }, []);
  return [onMouseMove, x, y];
}