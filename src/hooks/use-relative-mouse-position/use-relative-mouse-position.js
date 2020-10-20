import React from 'react';

/** Get the position of the mouse cursor relative to the element. Returns `onMouseMove` (function), `x` (number) and `y` (number) */
export default function useRelativeMousePosition() {
  const [[x, y], setMousePosition] = React.useState([null, null]);
  const onMouseMove = React.useCallback(e => {
    const { top, left } = e.target.getBoundingClientRect();
    setMousePosition([e.clientX - left, e.clientY - top]);
  }, []);

  return [onMouseMove, x, y];
}
