import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-md bg-muted-foreground/15 dark:bg-muted",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="animate-shimmer pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-black/10 to-transparent dark:via-white/10"
      />
    </div>
  )
}

export { Skeleton }