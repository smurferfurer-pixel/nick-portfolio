import { ArrowRight } from "lucide-react";
import Link from "next/link";
import WorkflowCard from "./WorkflowCard";
import { workflows } from "@/lib/workflows";

export default function WorkflowsSection() {
  const featured = workflows.slice(0, 3);

  return (
    <section id="work" className="px-6 py-24">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((w) => (
            <WorkflowCard
              key={w.slug}
              title={w.title}
              summary={w.summary}
              tools={w.tools}
              slug={w.slug}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/workflows"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
