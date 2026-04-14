import Image from "next/image";
import { siteConfig } from "@/data/site";

const systemNotes = [
  ["queue", "BullMQ retries"],
  ["cache", "Redis state"],
  ["data", "PostgreSQL"],
];

export function HeroProfile() {
  return (
    <div className="relative flex min-h-[640px] h-full flex-col justify-end overflow-hidden bg-[#111514]">
      <div className="technical-grid absolute inset-0 opacity-18" />
      <div className="absolute inset-x-8 top-20 h-80 rounded-full bg-[rgba(81,214,187,0.12)] blur-3xl" />
      <Image
        src={siteConfig.profileImage}
        alt="Jayhind Yadav portrait"
        width={720}
        height={1080}
        priority
        quality={80}
        sizes="(max-width: 976px) 92vw, 500px"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,21,20,0.03),rgba(17,21,20,0.04)_38%,rgba(17,21,20,0.92)_82%)]" />

      <div className="relative z-10 p-5 pt-40 text-white">
        <div className="grid gap-4 border-t border-white/12 pt-5 sm:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase text-[#8ce8d4]">current focus</p>
            <p className="mt-2 text-base font-semibold leading-snug">Reliable workflows, queues, APIs, and call-state systems.</p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase text-[#8ce8d4]">runtime map</p>
              <p className="text-xs font-semibold text-white/70">4+ years</p>
            </div>
            <div className="mt-3 grid gap-2 text-xs font-semibold">
              {systemNotes.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4">
                  <span className="text-white/52">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
