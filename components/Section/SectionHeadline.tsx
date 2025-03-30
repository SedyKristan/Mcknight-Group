import React, { FC } from "react";

interface SectionHeadlineProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeadline: FC<SectionHeadlineProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      <h1 className="display-1">{children}</h1>
      <div className="w-[110px] h-2 bg-[var(--color-primary)]"></div>
    </div>
  );
};

export default SectionHeadline;
