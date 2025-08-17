import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { type ReactNode } from "react";
import { Monitor, Palette, Code2 } from "lucide-react";
import Ecosystem from "./Ecosystem";

/** Easing estável (fora dos variants literais) */
const EASE_SOFT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** animações tipadas */
const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_SOFT, staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_SOFT } },
};

type Service = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: <Monitor size={18} />,
    title: "Frontend Development",
    desc:
      "Desenvolvimento de interfaces do zero ou a partir de design no Figma, priorizando acessibilidade e responsividade.",
  },
  {
    icon: <Palette size={18} />,
    title: "UX/UI Designing",
    desc:
      "Desenho interfaces limpas, acessíveis e consistentes, do wireframe ao protótipo, sempre focadas no usuário.",
  },
  {
    icon: <Code2 size={18} />,
    title: "Full Stack Development",
    desc:
      "Eu entrego soluções full-stack com abordagem focada no frontend e bases sólidas de backend.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full scroll-mt-28 px-5 sm:px-6 md:px-24 py-14 md:py-16"
    >
      {/* 2 colunas, 2 linhas: (1) header ocupa 2 cols, (2) box | ecosystem */}
      <div className="max-w-5xl mx-auto grid gap-x-12 gap-y-8 md:grid-cols-[1.1fr_.9fr] md:grid-rows-[auto_1fr]">
        {/* Linha 1: título + parágrafo em largura total */}
        <div className="md:col-span-2">
          <motion.h3
            className="text-xl text-violet-400 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Serviços
          </motion.h3>

          <motion.p
            className="font-light text-sm md:text-base text-foreground mb-2 md:mb-4 leading-relaxed md:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Crio interfaces web modernas e responsivas, com foco em usabilidade, performance e
            código limpo, usando HTML5, CSS3, JavaScript/TypeScript e React, com apoio de Figma e
            boas práticas ágeis.
          </motion.p>
        </div>

        {/* Linha 2, coluna esquerda: BOX roxa */}
        <div className="flex flex-col">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
              relative overflow-hidden rounded-xl
              border border-violet-500/80
              divide-y divide-violet-500/70
              bg-violet-50/70 shadow-[0_0_12px_rgba(139,92,246,0.25)]
              supports-[backdrop-filter]:backdrop-blur-sm
              dark:border-white/10 dark:divide-white/10 dark:bg-violet-600/10 dark:shadow-none
            "
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={item}
                className="grid grid-cols-[28px_1fr] gap-3 p-5 md:p-6"
              >
                <div
                  className="mt-0.5 grid h-7 w-7 place-items-center rounded-lg
                             bg-violet-500/15 text-purple-600 dark:text-purple-300
                             ring-1 ring-violet-500/25 shadow-[0_0_14px_rgba(167,139,250,0.35)]"
                  aria-hidden
                >
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground">
                    {s.title}
                  </h4>
                  <p className="text-sm md:text-[15px] font-light text-foreground/90 mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Linha 2, coluna direita: Ecosystem alinhado ao topo da box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_SOFT }}
          viewport={{ once: true }}
          className="md:self-start md:mt-4 lg:mt-10"
        >
          <Ecosystem />
        </motion.div>
      </div>
    </section>
  );
}
