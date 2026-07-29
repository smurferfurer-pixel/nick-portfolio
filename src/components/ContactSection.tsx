import { Mail, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-medium text-accent">Get in Touch</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s automate the work slowing your business down
          </h2>
          <p className="mt-3 text-muted">
            Not sure where to start? Book a free 15-minute strategy call or send
            me an email. No pressure — just a conversation about what&apos;s
            possible.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Calendar size={16} />
              Book Free Strategy Call
            </a>
            <a
              href="mailto:stoninonicknelson@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
