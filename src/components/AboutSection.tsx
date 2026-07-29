export default function AboutSection() {
  return (
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium text-accent">About Me</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Building automation that feels simple, scalable, and useful.
            </h2>
          </div>

          <div className="space-y-6 text-muted">
            <p>
              I&apos;m Nick, an automation specialist based in the Philippines.
              I help businesses eliminate repetitive work by designing and
              building custom automation systems — from lead capture pipelines
              to full operational workflows.
            </p>
            <p>
              I work mainly with <strong className="text-foreground">n8n</strong>
              , connecting apps like Google Workspace, Slack, CRMs, and AI tools
              into systems that just work — no babysitting required.
            </p>
            <p>
              Every system I build is designed to be maintainable, scalable, and
              actually useful on day one. I don&apos;t do &quot;set it and forget
              it&quot; — I do &quot;set it, test it, optimize it, then hand it
              over with confidence.&quot;
            </p>
            <p className="text-foreground">
              <strong>Certifications:</strong> n8n Certified · Tara AI
              Certified · GHL Partner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
