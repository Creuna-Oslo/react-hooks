import { useEffect } from 'react';

/** Attaches an event listener for `eventName` to `window`. */
export default function useEvent(eventName = '', eventHandler = () => {}) {
  useEffect(() => {
    window.addEventListener(eventName, eventHandler);
    return () => window.removeEventListener(eventName, eventHandler);
  }, []);
}
