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
      "Created functional full-stack websites using MERN and Next.js.",
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
      "Aligned dev with marketing goals in cross-functional squads.",
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
      <div className="max-w-6xl mx-auto">
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

        {/* timeline com ::before */}
        <div className="pl-2 relative">
          {/* OL é o TRILHO: cria a linha com ::before e a antena com ::after */}
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
              relative space-y-8 sm:space-y-10

              before:content-[''] before:absolute before:left-4 before:top-0
              before:h-full before:w-px before:bg-gradient-to-b
              before:from-violet-300/90 before:via-violet-400/90 before:to-violet-300/60
              before:shadow-[0_0_10px_1px_rgba(167,139,250,0.35)]

              after:content-[''] after:absolute after:left-4 after:-top-3
              after:h-3 after:w-px after:bg-violet-300/80
            "
          >
            {items.map((exp, idx) => (
              <motion.li
                key={idx}
                variants={item}
                className="
                  relative pl-8 md:pl-10

                  /* bolinha no eixo do trilho: 16px (left-4) - metade do dot (6px) = 10px */
                  before:content-[''] before:absolute before:left-[10px] before:top-1.5
                  before:h-3 before:w-3 before:rounded-full before:bg-violet-400
                  before:ring-4 before:ring-violet-400/25
                  before:border before:border-white/70
                  before:shadow-[0_0_18px_0_rgba(167,139,250,0.45)]
                "
              >
                {/* conteúdo */}
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{exp.role}</h4>
                  <span className="text-sm text-purple-600 dark:text-purple-300 font-light">{exp.company}</span>
                  <p className="text-xs text-purple-600 dark:text-purple-300 font-light mt-1">({exp.period})</p>

                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-sm leading-relaxed text-foreground font-light">
                        <span className="mr-2 select-none text-foreground">–</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
