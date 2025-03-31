const Container = ({
  children,
  className,
  direction = "column",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "column" | "row";
}) => {
  return (
    <div
      className={`flex ${direction === "row" ? "flex-row" : "flex-col"} max-w-[1280px] items-start justify-center gap-8 w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
