import { useEffect } from 'react';
/** Attaches an event listener for `eventName` to `window`. */

export default function useEvent() {
  var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var eventHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  useEffect(function () {
    window.addEventListener(eventName, eventHandler);
    return function () {
      return window.removeEventListener(eventName, eventHandler);
    };
  }, []);
}