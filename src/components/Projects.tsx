import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import donalds from "../assets/imgs/fsw-donalds.svg";
import payPass from "../assets/imgs/PayPass.svg";
import bloomNest from "../assets/imgs/bloomNest.svg";
import trilhas from "../assets/imgs/Login_Trilhas.svg";
import oxyBook from "../assets/imgs/OxyBook.svg";
import rakeUp from "../assets/imgs/rake up (1).svg";
import calendar from "../assets/imgs/calendar.svg";

const projects = [
  {
    id: "Front-end",
    title: "McDonald's UI Clone",
    description: "App moderno inspirado no McDonald’s, focado em uma experiência mobile fluida e atrativa.",
    techs: ["React", "TypeScript", "Tailwind"],
    url: "https://mcdonalds-proj-orders-git-main-lud-vazs-projects.vercel.app/fsw-donalds",
    image: { src: donalds, alt: "FSW-Donalds"},
  },
  {
    id: "UI/UX",
    title: "PayPass",
    description: "App moderno projetado no Figma para recarga de carteirinha e monitoramento de ônibus em tempo real.",
    techs: ["Figma"],
    url: "https://seusite.com/dashboard",
    image: { src: payPass, alt: "PayPass"},
  },
  {
    id: "Front-end",
    title: "Rake Up",
    description: "App moderno que consome a API do GitHub para exibir, de forma prática, os dados completos de qualquer usuário pesquisado.",
    techs: ["HTML5", "CSS3", "JavaScript"],
    url: "https://ludslvaz.github.io/API-challend.",
    image: { src: rakeUp, alt: "rakeUp"},
  },
   {
    id: "Front-end",
    title: "BloomNest",
    description: "E-commerce moderno de flores, oferecendo uma experiência de compra simples e agradável.",
    techs: ["HTML5", "CSS3", "JavaScript"],
    url: "https://ludslvaz.github.io/Ecommerce-flowers",
    image: { src: bloomNest, alt: "BloomNest"},
  },
   {
    id: "Front-end",
    title: "OxyBook",
    description: "Site de livros que consome uma API para exibir catálogos, detalhes e busca rápida por títulos e autores.",
    techs: ["HTML5", "CSS3", "JavaScript"],
    url: "https://github.com/ludslvaz/BLOGBOOK-TESTE?tab=readme-ov-file",
    image: { src: oxyBook, alt: "OxyBook"},
  },
   {
    id: "Front-end",
    title: "Calendário Moderno",
    description: "Calendário responsivo com navegação por meses e interação intuitiva para visualizar e organizar datas.",
    techs: ["HTML5", "CSS3", "JavaScript"],
    url: "https://calendario-alpha.vercel.app",
    image: { src: calendar, alt: "calendario"},
  },
   {
    id: "Front-end",
    title: "Formulário - Trilhas",
    description: "Formulário responsivo com design organizado e campos de fácil interação, desenvolvido para o programa Trilhas Inova.",
    techs: ["HTML5", "CSS3"],
    url: "https://form-inova-ma.vercel.app",
    image: { src: trilhas, alt: "trilhas"},
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 md:px-24 pt-8 pb-16 text-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-xl text-violet-400 font-medium mb-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects.
        </motion.h3>

        <motion.p
            className="text-foreground leading-relaxed mt-0 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
        >
            Aqui estão alguns projetos que já trabalhei: 
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-6 border border-muted bg-white shadow-md dark:bg-[#7c3aed]/30 backdrop-blur-sm transition duration-300 ease-in-out hover:scale-102 hover:-translate-y-1"
            >
              {/* Imagem do projeto */}
              <div className="relative mb-5 -mt-3 w-[110%] -ml-[5%] overflow-hidden rounded-xl">
                {/* Mantém proporção e evita layout shift */}
                <div className="aspect-[16/9]">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Número / título / descrição / techs / link... */}
              <div className="w-fit text-sm bg-purple-400/20 text-purple-600 dark:text-purple-300 font-light px-2 py-0.5 rounded-full mb-1 font-mono">
                {project.id}
              </div>
              <h3 className="text-lg text-purple-600 dark:text-purple-300 font-medium mb-2">{project.title}</h3>
              <p className="text-sm text-foreground font-light mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech, j) => (
                  <span
                    key={j}
                    className="text-xs bg-purple-400/20 text-purple-600 dark:text-purple-300 font-light px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
              >
                Ver projeto <ArrowUpRight size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-center text-sm italic text-zinc-400 dark:text-zinc-400 font-medium mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mais projetos em breve...
        </motion.p>
      </div>
    </section>
  );
}
