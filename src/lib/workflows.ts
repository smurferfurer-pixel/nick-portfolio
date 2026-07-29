export interface Workflow {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  results: string[];
  tools: string[];
}

export const workflows: Workflow[] = [
  {
    slug: "voice-ai-receptionist",
    title: "Voice AI Receptionist",
    summary:
      "An AI-powered receptionist that answers calls, books appointments, captures lead info, and syncs to calendar & CRM — completely hands-free.",
    problem:
      "A growing service business was missing after-hours calls, losing leads, and spending 10+ hours a week on manual call-backs and appointment scheduling.",
    solution:
      "Built a Voice AI receptionist using n8n and Vapi that answers incoming calls, captures customer details, checks availability, books appointments into Google Calendar, and logs everything in Airtable. The system handles 90% of calls without human intervention.",
    results: [
      "10+ hours saved per week on call management",
      "No missed leads from after-hours calls",
      "Appointments booked 24/7 without staff",
      "All data synced to CRM automatically",
    ],
    tools: ["n8n", "Vapi", "Google Calendar", "Airtable", "Twilio"],
  },
  {
    slug: "docu-sign-automation",
    title: "DocuSign → Asana → Slack",
    summary:
      "Automated pipeline that creates tasks, updates sheets, and notifies the team the moment a document is signed.",
    problem:
      "After every signed contract, the operations team had to manually create tasks in Asana, update a Google Sheet, and notify the team in Slack. This took 5+ hours per week and led to occasional missed steps.",
    solution:
      "Built an n8n workflow that listens for DocuSign completion webhooks. When a document is signed, it automatically creates structured tasks in Asana, appends the record to Google Sheets, and posts a formatted notification in the relevant Slack channel.",
    results: [
      "5+ hours saved weekly",
      "Zero missed follow-ups since launch",
      "Standardized process across the team",
      "Full audit trail in Sheets",
    ],
    tools: ["DocuSign", "Asana", "Google Sheets", "Slack", "n8n"],
  },
  {
    slug: "real-estate-ai-agent",
    title: "Real Estate AI Agent",
    summary:
      "AI agent that qualifies leads, schedules property viewings, and sends personalized follow-ups for a real estate team.",
    problem:
      "A real estate team was overwhelmed by inbound leads. Agents spent most of their day answering basic questions, qualifying leads manually, and scheduling viewings — leaving little time for closing deals.",
    solution:
      "Deployed an AI agent powered by DeepSeek and n8n that handles initial lead qualification via SMS and web chat. It asks qualifying questions, checks property availability, schedules viewings through Calendly, and hands off qualified leads to the sales team with full context.",
    results: [
      "3x faster lead response time",
      "Sales team only handles qualified leads",
      "24/7 lead capture and qualification",
      "Full conversation history passed to agents",
    ],
    tools: ["DeepSeek", "n8n", "Calendly", "Twilio", "Airtable"],
  },
];

export function getWorkflow(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug);
}
