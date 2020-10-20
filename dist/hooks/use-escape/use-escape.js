import useEvent from './use-event';

var isEscape = function isEscape(event) {
  return event && (event.key === 'Escape' || event.which === 27);
};
/** Fires `callback` when the escape key is pressed */


export default function useEscape(callback) {
  useEvent('keydown', function (e) {
    if (isEscape(e)) {
      callback();
    }
  });
}