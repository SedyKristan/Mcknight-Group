const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col max-w-[1280px] items-start justify-center gap-8 w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
