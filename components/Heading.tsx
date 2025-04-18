import { createElement, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
};

export function Heading({
  as = "h2",
  size = "lg",
  className,
  ...props
}: HeadingProps) {
  const sizes = {
    xl: "text-4xl font-bold md:text-5xl",
    lg: "text-3xl font-bold md:text-4xl",
    md: "text-2xl font-bold md:text-3xl",
    sm: "text-xl font-bold md:text-2xl",
    xs: "text-lg font-bold md:text-xl",
  };

  return createElement(as, {
    className: cn(sizes[size], className),
    ...props,
  });
}
