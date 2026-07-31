"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ToolLogo from "./ToolLogo";
import type { Platform } from "@/lib/workflows";
import { cn } from "@/lib/utils";

interface WorkflowCardProps {
  title: string;
  summary: string;
  tools: string[];
  platform?: Platform;
  slug?: string;
  screenshot?: string;
}

const platformColors: Record<Platform, string> = {
  n8n: "bg-emerald-600/10 text-emerald-600 ring-emerald-600/20",
  Zapier: "bg-orange-600/10 text-orange-600 ring-orange-600/20",
  "Make.com": "bg-blue-600/10 text-blue-600 ring-blue-600/20",
};

export default function WorkflowCard({
  title,
  summary,
  tools,
  platform,
  slug,
  screenshot,
}: WorkflowCardProps) {
  const href = slug ? `/workflows/${slug}` : "#";

  const Content = (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow hover:border-accent/30 hover:bg-card-hover hover:shadow-md"
    >
      {/* Screenshot thumbnail */}
      {screenshot && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
          {/* Base scale keeps image edge always outside the clip — no seam possible */}
          <Image
            src={screenshot}
            alt={title}
            fill
            className="scale-[1.06] transform-gpu object-cover object-left-top transition-transform duration-300 will-change-transform group-hover:scale-[1.1]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 pt-4">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              {platform && (
                <span
                  className={cn(
                    "mb-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ring-1",
                    platformColors[platform]
                  )}
                >
                  {platform}
                </span>
              )}
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-base font-semibold text-foreground">
                  {title}
                </h3>
                {slug && (
                  <ArrowUpRight
                    size={14}
                    className="mt-0.5 shrink-0 text-muted transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted line-clamp-2">
                {summary}
              </p>
            </div>
          </div>
        </div>
        {/* Tool logos row */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {tools.map((tool) => (
            <ToolLogo key={tool} name={tool} size={14} showLabel />
          ))}
        </div>
      </div>
    </motion.article>
  );

  if (slug) {
    return <Link href={href}>{Content}</Link>;
  }

  return Content;
}
