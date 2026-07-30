"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface WorkflowCardProps {
  title: string;
  summary: string;
  tools: string[];
  slug?: string;
}

export default function WorkflowCard({
  title,
  summary,
  tools,
  slug,
}: WorkflowCardProps) {
  const href = slug ? `/workflows/${slug}` : "#";

  const Content = (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:border-accent/30 hover:bg-card-hover hover:shadow-md"
    >
      <div className="flex-1">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {slug && (
            <ArrowUpRight
              size={16}
              className="text-muted transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted">{summary}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-background px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-border"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.article>
  );

  if (slug) {
    return <Link href={href}>{Content}</Link>;
  }

  return Content;
}
