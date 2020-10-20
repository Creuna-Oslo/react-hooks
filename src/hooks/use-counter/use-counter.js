import React from 'react';

const cb = React.useCallback;

export default function useCounter(initialValue = 0, min = 0, max = 1) {
  const [count, setCount] = React.useState(initialValue);

  const increase = cb(() => setCount(c => Math.min(max, c + 1)), [max]);
  const decrease = cb(() => setCount(c => Math.max(min, c - 1)), [min]);

  return [count, increase, decrease];
}
