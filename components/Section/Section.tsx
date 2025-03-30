import React from "react";
import { FC } from "react";

const Section: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <section
      className={`flex px-4 py-10 overflow-hidden justify-center items-center self-stretch border-2 border-[var(--divider-light-default)] ${className}`}
    >
      {children}
    </section>
  );
};
export default Section;
