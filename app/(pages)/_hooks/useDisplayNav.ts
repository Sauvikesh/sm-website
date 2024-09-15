import { useState, useEffect } from 'react';

export function useDisplayNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // Keep track of scrolling to detect scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show the navbar if the user scrolls up, hide if they scroll down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return isVisible;
}
