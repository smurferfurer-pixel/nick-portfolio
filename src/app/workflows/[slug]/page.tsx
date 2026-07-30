import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLogo from "@/components/ToolLogo";
import { workflows, getWorkflow } from "@/lib/workflows";
import { cn } from "@/lib/utils";
import type { Platform } from "@/lib/workflows";

const platformColors: Record<Platform, string> = {
  n8n: "bg-emerald-600/10 text-emerald-600 ring-emerald-600/20",
  Zapier: "bg-orange-600/10 text-orange-600 ring-orange-600/20",
  "Make.com": "bg-blue-600/10 text-blue-600 ring-blue-600/20",
};

export function generateStaticParams() {
  return workflows.map((w) => ({ slug: w.slug }));
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workflow = getWorkflow(slug);
  if (!workflow) notFound();

  return (
    <>
      <Navbar />
      <main className="px-6 pt-32 pb-24">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/workflows"
            className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} /> All projects
          </Link>

          {/* Platform badge + tools */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1",
                platformColors[workflow.platform]
              )}
            >
              {workflow.platform}
            </span>
          </div>
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {workflow.tools.map((tool) => (
              <ToolLogo key={tool} name={tool} size={18} showLabel />
            ))}
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {workflow.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {workflow.summary}
          </p>

          {/* Screenshot */}
          {workflow.screenshot && (
            <div className="relative mt-10 overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src={workflow.screenshot}
                alt={`${workflow.title} workflow screenshot`}
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
                unoptimized
              />
            </div>
          )}

          <hr className="my-10 border-border" />

          {/* Problem */}
          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold">The Problem</h2>
            <p className="leading-relaxed text-muted">{workflow.problem}</p>
          </section>

          {/* Solution */}
          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold">The Solution</h2>
            <p className="leading-relaxed text-muted">{workflow.solution}</p>
          </section>

          {/* Results */}
          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold">Key Outcomes</h2>
            <ul className="space-y-3">
              {workflow.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="text-muted">{result}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="my-10 border-border" />

          <div className="text-center">
            <p className="mb-4 text-sm text-muted">
              Want something similar for your business?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm transition-all hover:bg-accent/90 hover:shadow-md active:scale-[0.98]"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
