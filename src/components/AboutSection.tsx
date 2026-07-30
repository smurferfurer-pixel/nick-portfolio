"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <FadeIn>
      <section id="about" className="relative border-t border-border px-6 py-24">
        {/* Subtle accent line at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-24 bg-accent/50" />

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Photo */}
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

            {/* Text */}
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
                <p className="text-foreground">
                  <strong>Certifications:</strong> n8n Certified · Tara AI
                  Certified · GHL Partner · Make.com · Zapier
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
