import React from 'react';
import scrollingElement from '@creuna/utils/scrolling-element';
/** Calls `callback` _once_, when the scroll position reaches `targetPosition` */

export default function useOnScrollPosition() {
  var targetPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  React.useEffect(function () {
    var onScroll = function onScroll() {
      if (scrollingElement.scrollTop >= targetPosition) {
        callback();
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);
}