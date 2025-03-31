import React from "react";
import { FC } from "react";

const Section: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <section
      className={`flex px-4 lg:px-10 py-10 lg:py-[112px] overflow-hidden justify-center items-center self-stretch border-b border-[var(--divider-light-default)] ${className}`}
    >
      {children}
    </section>
  );
};
export default Section;
