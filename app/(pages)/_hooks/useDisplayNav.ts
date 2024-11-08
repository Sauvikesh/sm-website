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

    const handleHover = (event: any) => {
      const y = event.clientY;
      if (y <= 100) {
        setIsVisible(true);
      }
    };

    // Attach the scroll and mouse hover event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleHover);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleHover);
    };
  }, [lastScrollY]);

  return isVisible;
}
