import { CheckCircle } from "lucide-react";

const skillCategories = [
  {
    title: "Automation & Workflows",
    skills: ["n8n", "Make.com", "Webhooks", "API Integration"],
  },
  {
    title: "AI & Language Models",
    skills: ["OpenAI", "DeepSeek", "Vapi", "Gemini"],
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

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
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

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <CheckCircle size={14} className="text-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
