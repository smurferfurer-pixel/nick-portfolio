import { IconType } from "react-icons";
import {
  SiAirtable,
  SiAnthropic,
  SiAsana,
  SiCalendly,
  SiClaude,
  SiDeepseek,
  SiGit,
  SiGithub,
  SiGoogle,
  SiGooglecalendar,
  SiGooglesheets,
  SiGoogledrive,
  SiGooglegemini,
  SiHubspot,
  SiMailchimp,
  SiMake,
  SiN8N,
  SiNotion,
  SiOpenaigym,
  SiZapier,
} from "react-icons/si";
import { FaSlack } from "react-icons/fa6";
import { TbLetterT, TbLetterV, TbLetterD, TbLetterG } from "react-icons/tb";

interface BrandConfig {
  icon: IconType;
  label: string;
}

const brands: Record<string, BrandConfig> = {
  n8n: { icon: SiN8N, label: "n8n" },
  zapier: { icon: SiZapier, label: "Zapier" },
  notion: { icon: SiNotion, label: "Notion" },
  deepseek: { icon: SiDeepseek, label: "DeepSeek" },
  gemini: { icon: SiGooglegemini, label: "Gemini" },
  "google workspace": { icon: SiGoogle, label: "Google Workspace" },
  "google calendar": { icon: SiGooglecalendar, label: "Google Calendar" },
  "google sheets": { icon: SiGooglesheets, label: "Google Sheets" },
  "google drive": { icon: SiGoogledrive, label: "Google Drive" },
  calendly: { icon: SiCalendly, label: "Calendly" },
  airtable: { icon: SiAirtable, label: "Airtable" },
  asana: { icon: SiAsana, label: "Asana" },
  slack: { icon: FaSlack, label: "Slack" },
  hubspot: { icon: SiHubspot, label: "HubSpot" },
  mailchimp: { icon: SiMailchimp, label: "Mailchimp" },
  "make.com": { icon: SiMake, label: "Make.com" },
  make: { icon: SiMake, label: "Make.com" },
  docusign: { icon: TbLetterD, label: "DocuSign" },
  twilio: { icon: TbLetterT, label: "Twilio" },
  openai: { icon: SiOpenaigym, label: "OpenAI" },
  vapi: { icon: TbLetterV, label: "Vapi" },
  gohighlevel: { icon: TbLetterG, label: "GHL" },
  "tara ai": { icon: TbLetterT, label: "Tara AI" },
  webhooks: { icon: SiZapier, label: "Webhooks" },
  github: { icon: SiGithub, label: "GitHub" },
  claude: { icon: SiClaude, label: "Claude" },
  anthropic: { icon: SiAnthropic, label: "Anthropic" },
  "hermes agent": { icon: SiN8N, label: "Hermes Agent" },
};

interface ToolLogoProps {
  name: string;
  size?: number;
  showLabel?: boolean;
}

export default function ToolLogo({
  name,
  size = 16,
  showLabel = false,
}: ToolLogoProps) {
  const key = name.toLowerCase().trim();
  const config = brands[key];

  if (!config) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-background px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-border">
        {name}
      </span>
    );
  }

  const Icon = config.icon;

  if (showLabel) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-background px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-border">
        <Icon size={size - 2} className="shrink-0" />
        {config.label}
      </span>
    );
  }

  // Icon-only mode (for inline use like skills list)
  return <Icon size={size} className="shrink-0 text-muted" title={config.label} />;
}
