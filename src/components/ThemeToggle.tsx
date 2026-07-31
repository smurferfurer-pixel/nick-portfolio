"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={dark}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300",
        dark ? "bg-accent" : "bg-border"
      )}
    >
      <span
        className={cn(
          "inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300",
          dark ? "translate-x-[22px]" : "translate-x-0.5"
        )}
      />
    </button>
  );
}
