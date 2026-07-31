import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-bold text-accent-foreground shadow-sm">
        N
      </span>
      <span className="text-sm font-semibold tracking-tight text-foreground">
        Nick Nelson
      </span>
    </a>
  );
}
