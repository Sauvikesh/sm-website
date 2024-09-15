import { useState, useEffect } from 'react';

export function useDarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetSection = document.getElementById('dark-mode');

      // Check if the target section is reached
      if (targetSection && scrollPosition >= targetSection.offsetTop) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return darkMode;
}
