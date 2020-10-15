import React from 'react';
import scrollingElement from '@creuna/utils/scrolling-element';

/** Calls `callback` _once_, when the scroll position reaches `targetPosition` */
export default function useOnScrollPosition(
  targetPosition = 0,
  callback = () => {}
) {
  React.useEffect(() => {
    const onScroll = () => {
      if (scrollingElement.scrollTop >= targetPosition) {
        callback();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
