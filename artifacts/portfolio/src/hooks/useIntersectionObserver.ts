import { useState, useEffect, RefObject } from 'react';

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Only trigger once
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isVisible;
}
