"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import ToolLogo from "./ToolLogo";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  freq: "Daily" | "Weekly" | "Core";
}

const skillCategories = [
  {
    title: "Automation & Workflows",
    skills: [
      { name: "n8n", freq: "Daily" },
      { name: "Make.com", freq: "Weekly" },
      { name: "Zapier", freq: "Weekly" },
      { name: "Webhooks", freq: "Daily" },
      { name: "API Integration", freq: "Daily" },
    ],
  },
  {
    title: "AI & Language Models",
    skills: [
      { name: "OpenAI", freq: "Daily" },
      { name: "DeepSeek", freq: "Daily" },
      { name: "Claude", freq: "Weekly" },
      { name: "Gemini", freq: "Weekly" },
      { name: "Hermes Agent", freq: "Weekly" },
    ],
  },
  {
    title: "Business & CRM Tools",
    skills: [
      { name: "Google Workspace", freq: "Daily" },
      { name: "Slack", freq: "Daily" },
      { name: "Airtable", freq: "Weekly" },
      { name: "Calendly", freq: "Weekly" },
      { name: "HubSpot", freq: "Weekly" },
      { name: "Asana", freq: "Weekly" },
    ],
  },
];

const freqColors: Record<string, string> = {
  Daily: "bg-accent/10 text-accent",
  Weekly: "bg-muted/10 text-muted",
  Core: "bg-accent/10 text-accent",
};

export default function SkillsSection() {
  return (
    <section className="bg-background px-6 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium text-accent">
              Tools & Skills
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              What I work with
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              A curated set of tools and platforms I use daily to build reliable
              automation systems.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className="rounded-xl bg-[#F5F5F0] p-6"
              >
                <h3 className="mb-5 text-sm font-semibold text-foreground">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="flex items-center gap-2 text-sm text-muted">
                        <ToolLogo name={skill.name} size={16} />
                        <span>{skill.name}</span>
                      </span>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                          freqColors[skill.freq]
                        )}
                      >
                        {skill.freq}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
