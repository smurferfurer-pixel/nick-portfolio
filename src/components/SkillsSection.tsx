"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import FadeIn from "./FadeIn";
import ToolLogo from "./ToolLogo";
import { fadeUp, stagger } from "@/lib/animations";

const skillCategories = [
  {
    title: "Automation & Workflows",
    skills: ["n8n", "Make.com", "Zapier", "Webhooks", "API Integration"],
  },
  {
    title: "AI & Language Models",
    skills: ["OpenAI", "DeepSeek", "Claude", "Gemini", "Hermes Agent"],
  },
  {
    title: "Business Tools",
    skills: [
      "Google Workspace",
      "Calendly",
      "DocuSign",
      "Airtable",
      "Asana",
      "Slack",
    ],
  },
  {
    title: "CRM & Marketing",
    skills: ["GoHighLevel", "Tara AI", "Mailchimp", "HubSpot"],
  },
];

const brandedTools = new Set([
  "n8n",
  "make.com",
  "zapier",
  "notion",
  "openai",
  "deepseek",
  "claude",
  "gemini",
  "hermes agent",
  "google workspace",
  "calendly",
  "docusign",
  "airtable",
  "asana",
  "slack",
  "hubspot",
  "mailchimp",
]);

export default function SkillsSection() {
  return (
    <section className="bg-card px-6 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium text-accent">Tools & Skills</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
            className="grid gap-8 sm:grid-cols-2"
          >
            {skillCategories.map((cat) => (
              <motion.div key={cat.title} variants={fadeUp}>
                <h3 className="mb-4 text-sm font-semibold text-foreground">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill) => {
                    const isBrand = brandedTools.has(skill.toLowerCase());
                    return (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        {isBrand ? (
                          <>
                            <ToolLogo name={skill} size={16} />
                            <span>{skill}</span>
                          </>
                        ) : (
                          <span className="inline-flex items-center gap-2">
                            <CheckCircle size={14} className="text-accent shrink-0" />
                            {skill}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
