import { useState, useEffect } from "react";

export default function useWindowSize() {
  const isClient = typeof window !== "undefined";
  const [isBigScreen, setIsBigScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsBigScreen(isClient && window.innerWidth >= 1008);
      setIsSmallScreen(isClient && window.innerWidth < 1008);
    };

    if (isClient) {
      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);

      return () => {
        window.removeEventListener("resize", updateScreenSize);
      };
    }
  }, [isClient]);

  return [isBigScreen, isSmallScreen];
}
