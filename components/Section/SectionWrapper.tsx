import React, { FC } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className }) => {
  return (
    <section
      className={`flex flex-col gap-12 lg:justify-center lg:w-full self-stretch ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
