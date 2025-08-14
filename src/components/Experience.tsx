import { motion } from "framer-motion";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

const items: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Pustantaran Nepal",
    period: "Feb 2025 – May 2025",
    bullets: [
      "Created functional full‑stack websites using MERN and Next.js.",
      "Designed strategies converting user retention into paying customers.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "IRDC Nepal",
    period: "Feb 2024 – May 2024",
    bullets: [
      "Improved UX with responsive layouts and clean componentization.",
      "Optimized landing pages and React state management.",
      "Refactored codebases and managed SQL databases.",
      "Performance boosts with lazy loading and best practices.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Mental Health and Yoga PVT LTD",
    period: "Feb 2022 – Apr 2023",
    bullets: [
      "Built accessible, responsive UIs with semantic HTML/CSS.",
      "Aligned dev with marketing goals in cross‑functional squads.",
    ],
  },
];

/** animações */
const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience" className="w-full px-5 sm:px-6 md:px-24 py-14 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* título + intro */}
        <motion.h3
          className="text-xl text-violet-400 font-medium mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h3>

        <motion.p
          className="font-light text-sm md:text-base text-foreground mb-8 md:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I started my tech journey in 2022. Since then I’ve worked in frontend, UI/UX and
          freelancing. Some highlights:
        </motion.p>

        {/* timeline */}
        <div className="relative pl-10">
          {/* trilho vertical (eixo fixo em 16px = left-4) */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-4 top-0 h-full w-px bg-violet-300/35"
          />
          {/* antena no topo, mesmo eixo do trilho */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-4 -top-3 h-3 w-px bg-violet-300/70"
          />

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8 sm:space-y-10"
          >
            {items.map((exp, idx) => (
              <motion.li key={idx} variants={item} className="relative">
                {/* marcador “pílula” centralizado no trilho:
                    trilho em 16px -> marcador 12px (w-3) => left = 16 - 6 = 10px */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-[10px] top-1.5 h-3 w-3 rounded-full
                             bg-violet-400 ring-4 ring-violet-400/25
                             shadow-[0_0_18px_0] shadow-violet-500/40
                             border border-white/50"
                />
                {/* conteúdo */}
                <div className="ml-8 md:ml-10">
                  <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 gap-y-1">
                    <h4 className="text-base md:text-lg font-semibold">{exp.role}</h4>
                    <span className="text-sm text-violet-400">{exp.company}</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{exp.period}</p>

                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-sm leading-relaxed text-foreground/90">
                        <span className="mr-2 select-none text-foreground/40">–</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
