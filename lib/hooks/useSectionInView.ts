"use client";

import { useActiveSectionContext } from "@/context/activeSectionContetxt";
import { useEffect, useCallback } from "react";

import { useInView } from "react-intersection-observer";

interface UseSectionInViewProps {
  sectionName: string;
  threshold?: number;
  delay?: number;
}

export const useSectionInView = ({
  sectionName,
  threshold = 0.75,
  delay = 1000,
}: UseSectionInViewProps) => {
  const { ref, inView } = useInView({
    threshold,
    rootMargin: "-50% 0px -50% 0px", // Only trigger when section is in center 50% of viewport
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const updateActiveSection = useCallback(() => {
    const timeSinceLastClick = Date.now() - timeOfLastClick;
    if (inView && timeSinceLastClick > delay) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick, delay]);

  useEffect(() => {
    updateActiveSection();
  }, [updateActiveSection]);

  return { ref, isInView: inView };
};
