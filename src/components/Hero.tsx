export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col justify-center px-6 pt-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-accent">
            Automation Specialist · Remote Freelancer
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I build automation systems that let businesses{" "}
            <span className="text-accent">focus on what matters</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            From lead capture to internal operations, I design workflows that
            eliminate repetitive work, reduce manual tasks, and make systems run
            themselves.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>

        {/* Quick stats row */}
        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
          {[
            { value: "50+", label: "Hours saved monthly" },
            { value: "90%", label: "Tasks automated" },
            { value: "20+", label: "Businesses helped" },
            { value: "100%", label: "Client satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
