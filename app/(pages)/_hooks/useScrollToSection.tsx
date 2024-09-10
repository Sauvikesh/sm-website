import { useEffect, useState } from 'react';

export function useScrollToSectionOnViewSwitch(
  activeButton: number,
  displayDesktop: boolean,
  scrollToSection: (sectionId: string) => void
) {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    if (renderCount < 2) {
      setRenderCount((prev) => prev + 1);
      return;
    }
    scrollToSection(activeButton.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayDesktop]);
}
