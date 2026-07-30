"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkflowCard from "@/components/WorkflowCard";
import { fadeUp, stagger } from "@/lib/animations";
import { workflows, platforms, type Platform } from "@/lib/workflows";
import { cn } from "@/lib/utils";

export default function WorkflowsIndexPage() {
  const [active, setActive] = useState<"all" | Platform>("all");

  const filtered =
    active === "all"
      ? workflows
      : workflows.filter((w) => w.platform === active);

  return (
    <>
      <Navbar />
      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} /> Back home
          </Link>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All Projects
          </h1>
          <p className="mt-3 max-w-xl text-muted">
            Browse all automation systems by platform. Click any project to see
            the full case study.
          </p>

          {/* Platform filter tabs */}
          <div className="mb-10 mt-8 flex flex-wrap gap-2">
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

          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((w) => (
              <motion.div key={w.slug} variants={fadeUp}>
                <WorkflowCard
                  title={w.title}
                  summary={w.summary}
                  tools={w.tools}
                  slug={w.slug}
                  platform={w.platform}
                  screenshot={w.screenshot}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
