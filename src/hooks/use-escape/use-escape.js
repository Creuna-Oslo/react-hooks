import useEvent from './use-event';

const isEscape = event =>
  event && (event.key === 'Escape' || event.which === 27);

/** Fires `callback` when the escape key is pressed */
export default function useEscape(callback) {
  useEvent('keydown', e => {
    if (isEscape(e)) {
      callback();
    }
  });
}
