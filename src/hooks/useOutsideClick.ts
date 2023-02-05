import { useEffect, useRef } from 'react';

export const useOutsideClick = (callbackFunction: () => void) => {
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleOutclick(event: MouseEvent) {
      if (!ref?.current?.contains(event.target as HTMLDivElement)) {
        callbackFunction();
      }
    }
    document.addEventListener('mousedown', handleOutclick);
    return () => {
      document.removeEventListener('mousedown', handleOutclick);
    };
  });

  return ref;
};