import { useCallback, useState, useEffect } from 'react';
/**
 * Simply returns width and height of the current window viewport.
 * Sets up a useEffect which updates when the viewport dimensions changes
 * @returns {{width: (number), height: (number)}}
 */
export function useWindowSize() {
  const isClient = typeof window === 'object';

  const getSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient]
  );

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return null;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, getSize]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
