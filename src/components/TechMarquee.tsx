"use client";

import { motion } from "framer-motion";
import {
  SiN8N,
  SiZapier,
  SiNotion,
  SiOpenaigym,
  SiDeepseek,
  SiGooglegemini,
  SiAnthropic,
  SiClaude,
  SiMake,
  SiAirtable,
  SiAsana,
  SiHubspot,
  SiMailchimp,
  SiCalendly,
  SiGoogle,
} from "react-icons/si";
import { FaSlack } from "react-icons/fa6";

const icons = [
  SiN8N,
  SiZapier,
  SiNotion,
  SiOpenaigym,
  SiDeepseek,
  SiGooglegemini,
  SiAnthropic,
  SiClaude,
  SiMake,
  SiAirtable,
  SiAsana,
  SiHubspot,
  SiMailchimp,
  SiCalendly,
  SiGoogle,
  FaSlack,
];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden bg-card py-10">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-card to-transparent" />

      <motion.div
        className="flex items-center gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {/* Double the icons so the loop feels seamless */}
        {[...icons, ...icons].map((Icon, i) => (
          <span key={i} className="shrink-0" title={Icon.name?.replace("Si", "")}>
            <Icon size={28} className="text-muted/40 transition-colors hover:text-muted/70" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
