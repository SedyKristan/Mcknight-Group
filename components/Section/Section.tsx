"use client";

import React, { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks/useSectionInView";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
  style?: React.CSSProperties;
  threshold?: number;
  delay?: number;
}

const Section = ({
  children,
  className,
  id,
  style,
  threshold,
  delay,
}: SectionProps) => {
  const { ref, isInView } = useSectionInView({
    sectionName: id,
    threshold,
    delay,
  });

  useEffect(() => {
    // Optional: You can use isInView to trigger animations or other effects
    if (isInView) {
      // Handle section becoming visible
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "flex px-4 lg:px-10 py-10 lg:py-[112px] overflow-hidden justify-center items-center self-stretch border-b border-[var(--divider-light-default)]",
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
