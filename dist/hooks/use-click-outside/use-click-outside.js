import useEvent from '../use-event/use-event';
/** Executes the provided callback when a click event occurs outside of the provided ref */

var useClickOutside = function useClickOutside(ref) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  useEvent('mousedown', function (e) {
    if (ref.current && e.target !== ref.current && !ref.current.contains(e.target) && e.clientX < document.body.scrollWidth) {
      callback();
    }
  });
};

export default useClickOutside;