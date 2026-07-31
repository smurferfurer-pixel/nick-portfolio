"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import FadeIn from "./FadeIn";
import CalendlyEmbed from "./CalendlyEmbed";
import { fadeUp } from "@/lib/animations";

const CALENDLY_URL = "https://calendly.com/stoninonicknelson";

export default function ContactSection() {
  return (
    <section className="bg-background px-6 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-medium text-accent">Get in Touch</p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s automate the work slowing your business down
            </h2>
            <p className="mt-3 text-muted">
              Book a free 15-minute strategy call and let&apos;s talk about
              what&apos;s possible. No pressure — just a conversation.
            </p>
          </div>

          {/* Calendly embed */}
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-border bg-card p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <CalendlyEmbed url={CALENDLY_URL} />
          </div>

          {/* Email fallback */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted">Prefer email?</p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:stoninonicknelson@gmail.com"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
              stoninonicknelson@gmail.com
            </motion.a>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
