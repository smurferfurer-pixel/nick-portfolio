import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { workflows, getWorkflow } from "@/lib/workflows";

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

          <div className="mb-8 flex flex-wrap gap-2">
            {workflow.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-background px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-border"
              >
                {tool}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {workflow.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {workflow.summary}
          </p>

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
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
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
