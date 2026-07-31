"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import ToolLogo from "./ToolLogo";
import { Mail, MessageCircle } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

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
    <section className="bg-background px-6 py-24">
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
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
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

              {/* Contact Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:stoninonicknelson@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/nick-stonino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://wa.me/639707564190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-16">
            <p className="mb-2 text-sm font-medium text-accent">Certifications</p>
            <h3 className="mb-6 text-3xl font-bold tracking-tight">
              Platforms I&apos;m certified on
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {certificates.map((cert) => (
                <a
                  key={cert.file}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:border-accent/30 hover:bg-card-hover hover:shadow-md"
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
