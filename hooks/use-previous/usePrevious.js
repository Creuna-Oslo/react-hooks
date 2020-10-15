import { useRef, useEffect } from 'react';
/**
 * A powerful hook which always gets you the previous value of a state variable in a component.
 * Used to compare a variable with its previous state in each render of a component it's used in.
 * @param value Prop or state from component
 * @returns {undefined}
 */
export function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
