import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactLinks() {
  const links = [
    { label: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
    { label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s|-/g, "")}`, icon: Phone },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
    { label: "GitHub", href: siteConfig.socials.github, icon: Github },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          className="surface-card flex items-center gap-3 p-4 font-medium text-[color:var(--ink)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[color:var(--charcoal)] text-white dark:text-[#101214]">
            <item.icon className="h-5 w-5" />
          </span>
          {item.label}
        </a>
      ))}
    </div>
  );
}
