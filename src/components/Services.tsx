import { motion } from "framer-motion";
import { Monitor, Palette, Code2 } from "lucide-react";
import Ecosystem from "./Ecosystem";

/** animações (mesmas usadas nas outras sections) */
const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type Service = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: <Monitor size={18} />,
    title: "Frontend Development",
    desc:
      "I specialize in frontend development with a focus on creating responsive and user-friendly interfaces.",
  },
  {
    icon: <Palette size={18} />,
    title: "UI/UX Designing",
    desc:
      "I create intuitive and visually appealing user interfaces tailored to your needs.",
  },
  {
    icon: <Code2 size={18} />,
    title: "Full Stack Development",
    desc:
      "I deliver full-stack solutions with a frontend-first approach and solid backend foundations.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full scroll-mt-28 px-5 sm:px-6 md:px-24 py-14 md:py-16"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-12">
        {/* Coluna esquerda (título + descrição + BOX com itens) */}
        <div>
          <motion.h3
            className="text-xl text-violet-400 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Serviços.
          </motion.h3>

          <motion.p
            className="font-light text-sm md:text-base text-foreground mb-6 md:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I offer a wide range of tailored services to meet your needs.
          </motion.p>

          {/* Box roxa com os serviços (como no print 1) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
              relative overflow-hidden rounded-xl
              /* linhas roxas no LIGHT */
              border border-violet-500/80
              divide-y divide-violet-500/70
              /* fundo claro levemente roxo no LIGHT */
              bg-violet-50/70
              /* leve glow pra parecer mais 'brilhante' no LIGHT */
              shadow-[0_0_12px_rgba(139,92,246,0.25)]
              supports-[backdrop-filter]:backdrop-blur-sm

              /* DARK mantém seu look atual */
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
                  className="
                    mt-0.5 grid h-7 w-7 place-items-center rounded-lg
                    bg-violet-500/15 text-purple-600 dark:text-purple-300
                    ring-1 ring-violet-500/25
                    shadow-[0_0_14px_rgba(167,139,250,0.35)]
                  "
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

          {/* CTA opcional */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            viewport={{ once: true }}
            className="pt-4 text-sm"
          >
            <span className="font-medium text-foreground">Want to work together?</span>
            <br />
            <a
              href="https://mail.google.com/mail/?view=cm&to=ludvazdev@gmail.com&su=Quero%20trabalhar%20com%20você&body=Olá%2C%20vamos%20conversar!"
              target="_blank"
              className="text-purple-500 hover:underline font-medium mt-1 inline-block"
            >
              Contact now
            </a>
          </motion.p>
        </div>

        {/* Coluna direita (seu grid de tecnologias) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="min-h-[220px] md:mt-30"
        >
          <Ecosystem />
        </motion.div>
      </div>
    </section>
  );
}
