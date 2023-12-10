"use client";
import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 1008);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsBigScreen(window.innerWidth >= 1008);
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return isBigScreen;
}
