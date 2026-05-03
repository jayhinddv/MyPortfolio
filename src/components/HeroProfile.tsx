import { siteConfig } from "@/data/site";
import Image from "next/image";

const systemNotes = [
  ["queue", "BullMQ retries"],
  ["cache", "Redis state"],
  ["data", "PostgreSQL"],
];

export function HeroProfile() {
  return (
    <div className="relative">
      <div className="relative aspect-[4/4.45] overflow-hidden bg-[#111514]">
        <Image
          src={siteConfig.profileImage}
          alt="Jayhind Yadav portrait"
          width={720}
          height={900}
          priority
          quality={84}
          sizes="(max-width: 976px) 92vw, 460px"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mt-4 border-t border-[color:var(--line)] pt-4">
        <p className="text-[11px] font-semibold uppercase text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]">current focus</p>
        <p className="mt-2 text-base font-semibold leading-snug text-[color:var(--ink)]">
          Reliable workflows, queues, APIs, and call-state systems.
        </p>
        <div className="mt-4 grid gap-2 text-sm">
          {systemNotes.map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 border-t border-[color:var(--line)] pt-2">
              <span className="text-[color:var(--muted)]">{label}</span>
              <span className="font-semibold text-[color:var(--ink)]">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
