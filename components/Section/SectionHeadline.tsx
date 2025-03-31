import React, { FC } from "react";

interface SectionHeadlineProps {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "start" | "end";
  theme?: "light" | "dark";
}

const SectionHeadline: FC<SectionHeadlineProps> = ({
  children,
  className,
  align = "start",
  theme = "light",
}) => {
  const alignClass = {
    center: "items-center",
    start: "items-start",
    end: "items-end",
  };

  return (
    <div
      className={`flex flex-col justify-center ${theme === "light" ? "text-black" : "text-white"} ${alignClass[align]}  gap-4 ${className}`}
    >
      <h1 className="display-1">{children}</h1>
      <div
        className={`w-[110px] h-2  ${theme === "light" ? "bg-[var(--color-primary)]" : "bg-[var(--color-primary-lighter)]"}`}
      ></div>
    </div>
  );
};

export default SectionHeadline;
