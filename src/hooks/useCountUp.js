// src/hooks/useCountUp.js
import { useEffect, useState } from 'react';

const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 100);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default useCountUp;
