"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import ToolLogo from "./ToolLogo";

const certificates = [
  { label: "n8n Certification", file: "/certificates/n8n-cert.pdf", tool: "n8n" },
  { label: "n8n Quickstart", file: "/certificates/n8n-quickstart.pdf", tool: "n8n" },
  { label: "n8n 101", file: "/certificates/n8n-101.pdf", tool: "n8n" },
  { label: "n8n 102", file: "/certificates/n8n-102.pdf", tool: "n8n" },
  { label: "n8n 103", file: "/certificates/n8n-103.pdf", tool: "n8n" },
  { label: "Zapier", file: "/certificates/zapier.pdf", tool: "Zapier" },
  { label: "Make.com", file: "/certificates/make-com.pdf", tool: "Make.com" },
  { label: "HighLevel", file: "/certificates/highlevel.pdf", tool: "GoHighLevel" },
];

export default function AboutSection() {
  return (
    <section className="bg-[#F3F0EA] px-6 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          {/* Bio */}
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-border shadow-sm lg:mx-0">
                <Image
                  src="/profile.jpg"
                  alt="Nick Nelson"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="mb-2 text-sm font-medium text-accent">About Me</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Building automation that feels simple, scalable, and useful.
              </h2>
              <div className="mt-6 space-y-5 text-muted leading-relaxed">
                <p>
                  I&apos;m Nick, an automation specialist based in the
                  Philippines. I help businesses eliminate repetitive work by
                  designing and building custom automation systems — from lead
                  capture pipelines to full operational workflows.
                </p>
                <p>
                  I work mainly with{" "}
                  <strong className="text-foreground">n8n</strong>, connecting
                  apps like Google Workspace, Slack, CRMs, and AI tools into
                  systems that just work — no babysitting required.
                </p>
                <p>
                  Every system I build is designed to be maintainable, scalable,
                  and actually useful on day one. I don&apos;t do &quot;set it
                  and forget it&quot; — I do &quot;set it, test it, optimize it,
                  then hand it over with confidence.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-16">
            <p className="mb-2 text-sm font-medium text-accent">Certifications</p>
            <h3 className="mb-6 text-2xl font-bold tracking-tight">
              Platforms I&apos;m certified on
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {certificates.map((cert) => (
                <a
                  key={cert.file}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/30 hover:bg-card-hover hover:shadow-sm"
                >
                  <ToolLogo name={cert.tool} size={22} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {cert.label}
                    </p>
                    <p className="text-xs text-muted">View PDF →</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
