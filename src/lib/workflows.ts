export type Platform = "n8n" | "Zapier" | "Make.com";

export interface Workflow {
  slug: string;
  title: string;
  summary: string;
  platform: Platform;
  problem: string;
  solution: string;
  results: string[];
  tools: string[];
  screenshot?: string;
}

export const workflows: Workflow[] = [
  // ═══════════════════════════════════════════════
  // n8n Workflows
  // ═══════════════════════════════════════════════
  {
    slug: "voice-ai-receptionist",
    title: "Voice AI Receptionist",
    summary:
      "An AI-powered receptionist that answers calls, books appointments, captures lead info, and syncs to calendar & CRM — completely hands-free.",
    platform: "n8n",
    problem:
      "A growing service business was missing after-hours calls, losing leads, and spending 10+ hours a week on manual call-backs and appointment scheduling.",
    solution:
      "Built a Voice AI receptionist using n8n and Vapi that answers incoming calls, captures customer details, checks availability, books appointments into Google Calendar, and logs everything in Airtable. The system handles 90% of calls without human intervention. The workflow uses multiple branches for getting slot availability, booking appointments, rescheduling, and cancellations — each routed through conditional logic with error handling.",
    results: [
      "10+ hours saved per week on call management",
      "No missed leads from after-hours calls",
      "Appointments booked 24/7 without staff",
      "All data synced to CRM automatically",
    ],
    tools: ["n8n", "Vapi", "Google Calendar", "Airtable", "Twilio"],
    screenshot: "/workflows/voice-ai-receptionist.png",
  },
  {
    slug: "real-estate-ai-agent",
    title: "Real Estate AI Agent",
    summary:
      "AI agent that qualifies leads, schedules property viewings, and sends personalized follow-ups for a real estate team.",
    platform: "n8n",
    problem:
      "A real estate team was overwhelmed by inbound leads. Agents spent most of their day answering basic questions, qualifying leads manually, and scheduling viewings — leaving little time for closing deals.",
    solution:
      "Deployed an AI agent powered by DeepSeek and n8n that handles initial lead qualification via web chat. It uses a custom knowledge base for property guidelines, accesses project files, saves leads to a sheet, books meetings via calendar, and escalates hot leads — all through natural conversation. The agent maintains memory across the conversation so it never asks for the same info twice.",
    results: [
      "3x faster lead response time",
      "Sales team only handles qualified leads",
      "24/7 lead capture and qualification",
      "Full conversation history passed to agents",
    ],
    tools: ["n8n", "DeepSeek", "Google Sheets", "Calendly", "Slack"],
    screenshot: "/workflows/real-estate-ai-agent.png",
  },
  {
    slug: "ai-job-scraper-resume-tailor",
    title: "AI Job Scraper & Resume Tailor",
    summary:
      "Automated job search tool that scrapes AI job listings, tailors your resume for each role, and drafts application emails — all from a Slack command.",
    platform: "n8n",
    problem:
      "Applying to multiple AI roles manually is tedious — each job requires reading the description, tweaking the resume, checking for duplicates, and writing a cover email. This process takes 20-30 minutes per application.",
    solution:
      "Built an n8n workflow triggered by a Slack command. It validates the query, calls a job search API to find relevant listings, then loops through each job — retrieves the user's base resume from Google Docs, uses an LLM (via OpenRouter) to tailor it to the specific job description, checks for existing tailored versions to avoid duplicates, updates the file, and drafts a personalized email if the listing includes a contact address. Everything is reported back to Slack.",
    results: [
      "Cuts application time from 30 min to ~5 min per role",
      "AI-generated tailored resumes for each job description",
      "Duplicate prevention — never overwrites an existing tailored resume",
      "Auto-drafts application emails when contact is available",
    ],
    tools: ["n8n", "OpenAI", "Google Docs", "Slack", "Google Drive"],
    screenshot: "/workflows/ai-job-scraper-resume-tailor.png",
  },
  {
    slug: "data-extraction-pipeline",
    title: "Bulk PDF & Photo Data Extraction",
    summary:
      "Automated pipeline that extracts text from hundreds of PDFs and photos, analyzes content with AI, and writes structured data to a spreadsheet.",
    platform: "n8n",
    problem:
      "Processing hundreds of PDF documents and photos manually to build a structured database was taking days of repetitive work — opening each file, reading content, and typing data into a spreadsheet.",
    solution:
      "Created an n8n workflow that reads a project list from a sheet, loops through project folders in Google Drive, downloads PDFs, extracts text, analyzes document quality, and feeds everything into a DeepSeek LLM for structured analysis. The workflow also handles photos by listing image files from designated folders. All extracted and analyzed data is combined and written to a Google Sheet as structured records.",
    results: [
      "Saved days of manual data entry from hundreds of PDFs",
      "AI-powered extraction and structuring of document content",
      "Handles both PDF text and photo image sources",
      "All data written to Sheets in a consistent, queryable format",
    ],
    tools: ["n8n", "DeepSeek", "Google Drive", "Google Sheets", "PDF"],
    screenshot: "/workflows/data-extraction-pipeline.png",
  },
  {
    slug: "fb-ai-agent",
    title: "Facebook Page AI Agent",
    summary:
      "AI-powered customer support agent for Facebook Pages that answers inquiries, filters duplicate messages, and responds using your knowledge base.",
    platform: "n8n",
    problem:
      "Managing customer inquiries on a Facebook Page manually meant slow response times, missed messages during off-hours, and repetitive answers to the same questions.",
    solution:
      "Built an n8n agent connected to Facebook Messenger via webhooks. It filters duplicate messages to avoid double replies, queries a Page Knowledge Base for accurate information, and uses Google Gemini to generate natural, context-aware responses. The agent maintains conversation memory so interactions feel continuous rather than robotic.",
    results: [
      "Instant responses to customer inquiries 24/7",
      "Duplicate message filtering prevents spam replies",
      "Knowledge base integration ensures accurate answers",
      "Conversation memory for natural, contextual replies",
    ],
    tools: ["n8n", "Gemini", "Facebook", "Messenger", "Webhooks"],
    screenshot: "/workflows/fb-ai-agent.png",
  },

  // ═══════════════════════════════════════════════
  // Zapier Workflows
  // ═══════════════════════════════════════════════
  {
    slug: "ai-content-repurposing",
    title: "AI Content Repurposing Pipeline",
    summary:
      "Automatically transcribes video uploads, generates summaries, and publishes tailored content to Facebook, LinkedIn, and Instagram.",
    platform: "Zapier",
    problem:
      "Creating social media content from videos was a multi-step manual process — transcribe, summarize, reformat for each platform, then publish individually. A single video could take over an hour to repurpose.",
    solution:
      "Built a Zapier workflow that triggers when a video is uploaded to Google Drive. It uses AI by Zapier to transcribe the audio, then generates a structured summary from the transcription. Conditional Paths route content to different social platforms based on content type — posting to Facebook, sharing updates on LinkedIn, and publishing photos to Instagram — each formatted appropriately for the platform.",
    results: [
      "Reduced video-to-social repurposing from 1+ hour to minutes",
      "AI transcription eliminates manual note-taking",
      "Conditional routing sends content to the right platforms",
      "Consistent multi-platform publishing without manual work",
    ],
    tools: ["Zapier", "Google Drive", "Facebook", "LinkedIn", "Instagram"],
    screenshot: "/workflows/ai-content-repurposing.png",
  },
  {
    slug: "lead-enrichment-automation",
    title: "Lead Enrichment & Priority Routing",
    summary:
      "Enriches incoming leads with company data from Apollo, scores them by priority, notifies the team, and drafts personalized outreach emails.",
    platform: "Zapier",
    problem:
      "Incoming leads from forms lacked company context, making it hard for sales to prioritize. The team wasted time researching each lead manually and writing individual outreach emails.",
    solution:
      "Created a Zapier workflow triggered by form submissions (via Youform). It uses Formatter to clean company URLs, then Webhooks by Zapier to search Apollo.io for company enrichment data. Leads are split into High Priority and Low Priority paths — high-priority leads get saved to a Google Sheet, trigger a Slack alert, and receive an AI-generated personalized email draft sent via Gmail. Low-priority leads get a team notification for later follow-up.",
    results: [
      "Leads automatically enriched with company data from Apollo",
      "High-priority leads get instant team notification via Slack",
      "AI drafts personalized outreach emails based on lead data",
      "Structured lead tracking in Google Sheets",
    ],
    tools: ["Zapier", "Google Sheets", "Slack", "Gmail", "Apollo"],
    screenshot: "/workflows/lead-enrichment-automation.png",
  },

  // ═══════════════════════════════════════════════
  // Make.com Workflows
  // ═══════════════════════════════════════════════
  {
    slug: "email-attachment-intake",
    title: "Email Attachment Intake Automation",
    summary:
      "Automatically processes incoming email attachments — uploads them to Gemini AI for analysis, saves to Google Drive, logs to Sheets, and sends confirmations.",
    platform: "Make.com",
    problem:
      "Receiving attachments via email and manually saving, organizing, and tracking each file was tedious. Files sat in inboxes, got lost, and there was no centralized log of what came in or what was inside them.",
    solution:
      "Built a Make.com scenario that watches a Gmail inbox for new messages with attachments. It lists all attachments, uploads each one to Google's Gemini AI for intelligent analysis, saves the original file to a structured Google Drive folder, logs the email details + AI analysis to a Google Sheet, and sends a confirmation email back — all in one automated flow.",
    results: [
      "Attachments automatically organized and analyzed on arrival",
      "AI-powered content extraction via Gemini",
      "Centralized log of all incoming files in Google Sheets",
      "Confirmation emails sent automatically",
    ],
    tools: ["Make.com", "Gmail", "Gemini", "Google Drive", "Google Sheets"],
    screenshot: "/workflows/email-attachment-intake.png",
  },

  // ═══════════════════════════════════════════════
  // Uncategorized (no screenshot available)
  // ═══════════════════════════════════════════════
  {
    slug: "docu-sign-automation",
    title: "DocuSign → Asana → Slack",
    summary:
      "Automated pipeline that creates tasks, updates sheets, and notifies the team the moment a document is signed.",
    platform: "n8n",
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
    tools: ["n8n", "DocuSign", "Asana", "Google Sheets", "Slack"],
  },
];

export function getWorkflow(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug);
}

export function getWorkflowsByPlatform(platform: Platform): Workflow[] {
  return workflows.filter((w) => w.platform === platform);
}

export const platforms: Platform[] = ["n8n", "Zapier", "Make.com"];
