import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLogo from "@/components/ToolLogo";
import { workflows } from "@/lib/workflows";

export default function WorkflowsIndexPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-5xl">
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
            Every automation system I&apos;ve built — from small integrations to
            full operational workflows.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {workflows.map((w) => (
              <Link
                key={w.slug}
                href={`/workflows/${w.slug}`}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/30 hover:bg-card-hover hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-foreground group-hover:text-accent">
                  {w.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {w.summary}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {w.tools.map((tool) => (
                    <ToolLogo key={tool} name={tool} size={14} showLabel />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
