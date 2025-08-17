import { motion } from "framer-motion";

/** ---- Tipos ---- */
type Bullet =
  | string
  | {
      lead: string;   // “título” do bullet
      items: string[]; // subtópicos explicando o lead
    };

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: Bullet[];
};

/** ---- Dados ---- */
const items: ExperienceItem[] = [
  {
    role: "Jovem Tech - Trilha Back-end",
    company: "Governo do Maranhão - SECTI-MA",
    period: "maio 2025 – até o momento",
    bullets: [
      {
        lead:
          "Atuação em projeto real de previsão de retiradas do freezer para 10 SKUs, visando equilibrar disponibilidade e perdas.",
        items: [
          "Papel: automação do fluxo de dados (Excel → Python/pandas), limpeza/validação e geração do relatório diário.",
          "Visualização rápida: Streamlit + Matplotlib para explorar métricas e validar hipóteses com a operação.",
          "MVP front: React para exibir o cronograma e facilitar a tomada de decisão na loja.",
          "Documentação do pipeline (dados → predição → relatório) e handoff para o time.",
          "Soft skills: colaboração com stakeholders (Grupo Mateus), comunicação clara, priorização e entrega sob prazo curto.",
        ],
      },
      "Em progresso: estudos de Java (POO/collections) e primeiros passos em Spring Boot.",
    ],
  },
  {
    role: "Bolsista - Programa Trilhas Inova",
    company: "Governo do Maranhão - SECTI-MA",
    period: "março 2024 – agosto 2024",
    bullets: [
      "Desenvolvimento front-end, utilizando tecnologias como HTML5, CSS3, JavaScript, TypeScript, React e modelagem de banco de dados.",
      "Lógica de programação, consumo e testes de APIs em projetos guiados.",
      "Ao final do programa, participei do hackathon de encerramento, colaborando em soluções inovadoras para impactar positivamente comunidades locais, o que fortaleceu minhas habilidades interpessoais e de trabalho em equipe.",
    ],
  },
  {
    role: "Trainee",
    company: "INCODE - Tech School",
    period: "julho 2023 – fevereiro 2024",
    bullets: [
      "Aprimoramento no desenvolvimento de sites web utilizando HTML, CSS, JavaScript, Python e Figma, incluindo lógica de programação, UX/UI e GitHub, no dia a dia.",
      "A experiência incluiu trabalho em equipe, comunicação constante com a empresa e apresentações diárias sobre o progresso nos projetos.",
      "Monitora do primeiro módulo (INCODE), guiando alunos em fundamentos de front-end e lógica com Python.",
    ],
  },
];

/** ---- Animações ---- */
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

/** ---- Componente ---- */
export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-5 sm:px-6 md:px-24 pt-14 md:pt-16 pb-28 md:pb-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* título + intro */}
        <motion.h3
          className="text-xl text-violet-400 font-medium mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experiência.
        </motion.h3>

        <motion.p
          className="font-light text-sm md:text-base text-foreground mb-8 md:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Comecei minha jornada na tecnologia em 2021, desde então, sigo em aprimoramento contínuo e hoje estou me especializando em back-end.
        </motion.p>

        {/* timeline com ::before */}
        <div className="pl-2 relative">
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
              relative space-y-8 sm:space-y-10
              pb-8 sm:pb-10
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
                  before:content-[''] before:absolute before:left-[10px] before:top-1.5
                  before:h-3 before:w-3 before:rounded-full before:bg-violet-400
                  before:ring-4 before:ring-violet-400/25
                  before:border before:border-white/70
                  before:shadow-[0_0_18px_0_rgba(167,139,250,0.45)]
                "
              >
                {/* conteúdo */}
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    {exp.role}
                  </h4>
                  <span className="text-sm text-purple-600 dark:text-purple-300 font-light">
                    {exp.company}
                  </span>
                  <p className="text-xs text-purple-600 dark:text-purple-300 font-light mt-1">
                    ({exp.period})
                  </p>

                  {/* Bullets (string ou lead+subitens) */}
                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((b, i) => {
                      if (typeof b === "string") {
                        return (
                          <li
                            key={i}
                            className="text-sm leading-relaxed text-foreground font-light"
                          >
                            <span className="mr-2 select-none text-purple-600 dark:text-purple-300">–</span>
                            <span className="whitespace-pre-line">{b}</span>
                          </li>
                        );
                      }

                      return (
                        <li key={i} className="text-sm leading-relaxed text-foreground">
                          <div className="font-medium">{b.lead}</div>
                          <ul className="mt-2 ml-4 space-y-1">
                            {b.items.map((s, j) => (
                              <li
                                key={j}
                                className="flex gap-2 text-foreground/90 font-light"
                              >
                                <span className="select-none text-lg text-purple-600 dark:text-purple-300">•</span>
                                <span className="whitespace-pre-line">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
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
