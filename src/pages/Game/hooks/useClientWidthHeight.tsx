import { RefObject, useEffect, useState } from 'react';

const useClientWidthHeight = (ref: RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [minLength, setMinLength] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.getBoundingClientRect().width);
        setHeight(ref.current.getBoundingClientRect().height);
        setMinLength(
          Math.min(
            ref.current.getBoundingClientRect().width,
            ref.current.getBoundingClientRect().height,
          ),
        );
      }
    };

    if (ref.current) {
      setWidth(ref.current.getBoundingClientRect().width);
      setHeight(ref.current.getBoundingClientRect().height);
      setMinLength(
        Math.min(
          ref.current.getBoundingClientRect().width,
          ref.current.getBoundingClientRect().height,
        ),
      );
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return { width, height, minLength };
};

export default useClientWidthHeight;
