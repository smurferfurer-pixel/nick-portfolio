"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, staggerFast } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col justify-center px-6 pt-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-3xl">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 text-sm font-medium text-accent"
          >
            Automation Specialist · Remote Freelancer
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            I build automation systems that let businesses{" "}
            <span className="text-accent">focus on what matters</span>.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            From lead capture to internal operations, I design workflows that
            eliminate repetitive work, reduce manual tasks, and make systems run
            themselves.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerFast}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              variants={fadeUp}
              href="#work"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm transition-all hover:bg-accent/90 hover:shadow-md active:scale-[0.98]"
            >
              See My Work
            </motion.a>
            <motion.a
              variants={fadeUp}
              href="#contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
            >
              Book a Strategy Call
            </motion.a>
          </motion.div>
        </div>

        {/* Quick stats row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4"
        >
          {[
            { value: "50+", label: "Hours saved monthly" },
            { value: "90%", label: "Tasks automated" },
            { value: "20+", label: "Businesses helped" },
            { value: "100%", label: "Client satisfaction" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
