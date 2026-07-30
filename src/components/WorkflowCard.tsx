"use client";

import { motion } from "framer-motion";
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
}: WorkflowCardProps) {
  const href = slug ? `/workflows/${slug}` : "#";

  const Content = (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:border-accent/30 hover:bg-card-hover hover:shadow-md"
    >
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
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {slug && (
              <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 text-muted transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            )}
          </div>
          <p className="text-sm leading-relaxed text-muted">{summary}</p>
        </div>
      </div>
      {/* Tool logos row */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {tools.map((tool) => (
          <ToolLogo key={tool} name={tool} size={16} showLabel />
        ))}
      </div>
    </motion.article>
  );

  if (slug) {
    return <Link href={href}>{Content}</Link>;
  }

  return Content;
}
