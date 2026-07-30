"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import WorkflowCard from "./WorkflowCard";
import FadeIn from "./FadeIn";
import { fadeUp, stagger } from "@/lib/animations";
import { workflows, platforms, type Platform } from "@/lib/workflows";
import { cn } from "@/lib/utils";

export default function WorkflowsSection() {
  const [active, setActive] = useState<"all" | Platform>("all");

  const filtered =
    active === "all"
      ? workflows
      : workflows.filter((w) => w.platform === active);

  return (
    <FadeIn>
      <section id="work" className="relative border-t border-border px-6 py-24">
        {/* Subtle accent line at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-24 bg-accent/50" />
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium text-accent">Case Studies</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Automation systems built for real business growth
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Real projects. Real results. Click any case study to see the full
              breakdown — problem, solution, and outcomes.
            </p>
          </div>

          {/* Platform filter tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActive("all")}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                active === "all"
                  ? "bg-accent text-accent-foreground"
                  : "bg-background text-muted ring-1 ring-border hover:text-foreground"
              )}
            >
              All ({workflows.length})
            </button>
            {platforms.map((p) => {
              const count = workflows.filter((w) => w.platform === p).length;
              if (count === 0) return null;
              return (
                <button
                  key={p}
                  onClick={() => setActive(p)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                    active === p
                      ? "bg-accent text-accent-foreground"
                      : "bg-background text-muted ring-1 ring-border hover:text-foreground"
                  )}
                >
                  {p} ({count})
                </button>
              );
            })}
          </div>

          {/* Workflow cards */}
          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.slice(0, 6).map((w) => (
              <motion.div key={w.slug} variants={fadeUp}>
                <WorkflowCard
                  title={w.title}
                  summary={w.summary}
                  tools={w.tools}
                  slug={w.slug}
                  platform={w.platform}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <Link
              href="/workflows"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </FadeIn>
  );
}
