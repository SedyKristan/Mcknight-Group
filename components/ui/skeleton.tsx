import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-[var(--color-neutral-lighter)] animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
