import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { useRef, useState } from "react";

// logos
import alura from "../assets/logos_cert/alura.svg";
import iema from "../assets/logos_cert/iema.svg";
import incode from "../assets/logos_cert/incode (1).svg";
import inovaMA from "../assets/logos_cert/inovaMA.svg";
import ingles from "../assets/logos_cert/ingles (1).svg";

// Imgs Certificados
import Trilhas from "../assets/certificados/Trilhas.svg";
import monitoria from "../assets/certificados/InCode.svg";
import Ingles from "../assets/certificados/Ingles.svg";
import Tecnico from "../assets/certificados/Tecnico (2).svg";
import react from "../assets/certificados/react.svg";
import typeScript from "../assets/certificados/TypeScript.svg";

/* ===== Tipos ===== */
type EducationItem = {
  degree: string;
  school: string;
  period: string;
  bullets?: string[];
};

type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  logo?: string;    // logo pequena (SVG/PNG) exibida no card
  preview?: string; // imagem grande do certificado (PNG/JPG)
};

/* ===== Dados ===== */
const education: EducationItem[] = [
  {
    degree: "Bacharelado em Engenharia de Software",
    school: "UNDB - Unidade de Ensino Superior Dom Bosco",
    period: "fevereiro 2024 – junho 2028",
    bullets: [
      "Foco em desenvolvimento web, algoritmo e banco de dados.",
      "Estrutura de dados, linguagens de porgramção e design de sistemas.",
      "Projetos de pesquisa e laborátorios em equipe.",
    ],
  },
  {
    degree: "Curso Técnico de Informática para Internet",
    school: "Incode Tech School",
    period: "janeiro 2021 - dezembro 2023",
    bullets: [
      `HTML5, CSS3, JavaScript, Python, MySQL, Git/GitHub, 
      Introdução a rede de computadores,
      Fundamentos de segurança da informação, Design UX/UI (Figma).`,
      "Projetos com práticas ágeis e revisões de código.",
    ],
  },
  {
    degree: "Curso de Língua e Cultura Inglesa",
    school: "CEMIC - Centro Maranhense de Idiomas e Culturas ",
    period: "fevereiro 2018 – novembro 2021",
    bullets: ["Nível Intermediário"],
  },
];

const certificates: CertificateItem[] = [
  {
    title: "Programa Trilhas Inova",
    issuer: "Governo do Maranhão - SECTI-MA",
    date: "2024",
    url: "https://www.linkedin.com/in/ludmilla-vaz-93b226217/details/certifications/1725579176858/single-media-viewer/?profileId=ACoAADasF78B040jSpfIA6aBW9knc0QNxNce_Ng",
    logo: inovaMA,
    preview: Trilhas,
  },
  {
    title: "Técnico de Informática p/Internet",
    issuer: "IEMA",
    date: "2023",
    url: "https://example.com/cert/css",
    logo: iema,
    preview: Tecnico,
  },
  {
    title: "Monitoria Front-End",
    issuer: "InCode - Tech School",
    date: "2024",
    url: "https://www.linkedin.com/in/ludmilla-vaz-93b226217/details/certifications/1711122477286/single-media-viewer/?profileId=ACoAADasF78B040jSpfIA6aBW9knc0QNxNce_Ng",
    logo: incode,
    preview: monitoria,
  },
  {
    title: "Curso de Língua Inglesa",
    issuer: "Cemic",
    date: "2021",
    url: "https://www.linkedin.com/in/ludmilla-vaz-93b226217/details/certifications/1709572881514/single-media-viewer/?profileId=ACoAADasF78B040jSpfIA6aBW9knc0QNxNce_Ng",
    logo: ingles,
    preview: Ingles,
  },
  {
    title: "TypeScript",
    issuer: "Alura",
    date: "2024",
    url: "https://www.linkedin.com/in/ludmilla-vaz-93b226217/details/certifications/1725578199703/single-media-viewer/?profileId=ACoAADasF78B040jSpfIA6aBW9knc0QNxNce_Ng",
    logo: alura,
    preview: typeScript,
  },
  {
    title: "React",
    issuer: "Alura",
    date: "2024",
    url: "https://www.linkedin.com/in/ludmilla-vaz-93b226217/details/certifications/1725578524934/single-media-viewer/?profileId=ACoAADasF78B040jSpfIA6aBW9knc0QNxNce_Ng",
    logo: alura,
    preview: react,
  },
];

/* ===== Animações ===== */
const easeSoft: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSoft, staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeSoft } },
};

/* ===== Utils ===== */
function placeNearCursor(
  e: { clientX: number; clientY: number },
  boxW = 360,
  boxH = 240,
  gap = 16
) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let left = e.clientX + gap;
  let top = e.clientY + gap;

  if (left + boxW + gap > vw) left = e.clientX - boxW - gap;
  if (top + boxH + gap > vh) top = e.clientY - boxH - gap;

  left = Math.max(8, Math.min(left, vw - boxW - 8));
  top = Math.max(8, Math.min(top, vh - boxH - 8));
  return { left, top };
}

/* ===== Card de Certificado ===== */

// extrai a posição do mouse, ou o centro do alvo quando for foco/teclado
function getPointFromEvent(
  e: React.MouseEvent | React.FocusEvent
): { x: number; y: number } {
  if ("clientX" in e && typeof e.clientX === "number") {
    return { x: e.clientX, y: (e as React.MouseEvent).clientY };
  }
  const el = e.target as HTMLElement;
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function CertificateCard({
  cert,
  onHoverMove, // (cert, clientX, clientY)
  onHoverEnd, // ()
}: {
  cert: CertificateItem;
  onHoverMove: (c: CertificateItem, x: number, y: number) => void;
  onHoverEnd: () => void;
}) {
  const touchTimer = useRef<number | null>(null);

  const handleEnterMove = (e: React.MouseEvent | React.FocusEvent) => {
    const { x, y } = getPointFromEvent(e);
    onHoverMove(cert, x, y);
  };

  const handleTouch = (e: React.TouchEvent) => {
    if (touchTimer.current) window.clearTimeout(touchTimer.current);
    const t = e.touches[0];
    onHoverMove(cert, t.clientX, t.clientY);
    touchTimer.current = window.setTimeout(() => onHoverEnd(), 1200);
  };

  return (
    <motion.div
      variants={item}
      className="
        group relative rounded-xl border border-white/10
        bg-white/5 dark:bg-white/[0.03] px-4 py-3
        hover:-translate-y-0.5 transition duration-200
        focus-within:ring-2 focus-within:ring-violet-400/40
        flex items-start gap-3
      "
    >
      {/* Logo apenas decorativa (não abre preview agora) */}
      <div
        className="
          mt-0.5 grid h-9 w-9 place-items-center rounded-full
          bg-white text-violet-500 ring-1 ring-white/15 shadow
          overflow-hidden shrink-0
        "
      >
        {cert.logo ? (
          <img src={cert.logo} alt="" className="block w-full h-full object-cover" />
        ) : (
          <Award size={16} className="opacity-80" />
        )}
      </div>

      {/* NOME: hover/focus mostra a preview flutuante */}
      <a
        href={cert.url || "#"}
        target={cert.url ? "_blank" : undefined}
        rel={cert.url ? "noopener noreferrer" : undefined}
        className="min-w-0"
        onMouseEnter={handleEnterMove}
        onMouseMove={(e) => onHoverMove(cert, e.clientX, e.clientY)}
        onMouseLeave={onHoverEnd}
        onFocus={handleEnterMove}
        onBlur={onHoverEnd}
        onTouchStart={handleTouch}
      >
        <div className="flex items-center gap-2">
          <h5 className="text-sm font-medium truncate underline decoration-transparent hover:decoration-violet-400/70">
            {cert.title}
          </h5>
          {cert.url && (
            <ExternalLink size={14} className="shrink-0 opacity-70 group-hover:opacity-100" />
          )}
        </div>
        <p className="text-xs text-muted-foreground font-light mt-0.5">
          {cert.issuer} • {cert.date}
        </p>
      </a>
    </motion.div>
  );
}

/* ===== Section Education ===== */
export default function Education() {
  const [peek, setPeek] = useState<{
    cert: CertificateItem;
    left: number;
    top: number;
  } | null>(null);

  const handleHoverMove = (c: CertificateItem, x: number, y: number) => {
    const { left, top } = placeNearCursor({ clientX: x, clientY: y }, 360, 240, 16);
    setPeek({ cert: c, left, top });
  };

  const handleHoverEnd = () => setPeek(null);

  return (
    <section id="education" className="w-full px-5 sm:px-6 md:px-24 py-14 md:py-16 scroll-mt-28">
      <div className="max-w-5xl mx-auto pb-28">
        {/* título + intro */}
        <motion.h3
          className="text-xl text-violet-400 font-medium mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Educação.
        </motion.h3>

        <motion.p
          className="font-light text-sm md:text-base text-foreground mb-8 md:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Estudos formais e aprendizagem contínua por meio de certificados.
        </motion.p>

        {/* ===== Timeline ===== */}
        <div className="pl-2 relative">
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
            {education.map((ed, idx) => (
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
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{ed.degree}</h4>
                  <span className="text-sm text-purple-600 dark:text-purple-300 font-light">
                    {ed.school}
                  </span>
                  <p className="text-xs text-purple-600 dark:text-purple-300 font-light mt-1">
                    ({ed.period})
                  </p>

                  {ed.bullets?.length ? (
                    <ul className="mt-3 space-y-2">
                      {ed.bullets.map((b, i) => (
                        <li key={i} className="text-sm leading-relaxed text-foreground font-light">
                          <span className="mr-2 select-none text-foreground">–</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* ===== Certificados ===== */}
        <motion.h4
          className="text-base md:text-lg font-medium mt-12 mb-4 text-foreground"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          Certificados
        </motion.h4>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-3 sm:grid-cols-2 md:grid-cols-3"
        >
          {certificates.map((c, i) => (
            <CertificateCard
              key={i}
              cert={c}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            />
          ))}
        </motion.div>
      </div>

      {/* ===== Preview flutuante ===== */}
      {peek?.cert.preview && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="
            fixed z-[60] pointer-events-none select-none
            rounded-xl border border-white/10 bg-black/80 backdrop-blur
            shadow-xl overflow-hidden
          "
          style={{
            left: peek.left,
            top: peek.top,
            width: 360,
            maxWidth: "90vw",
            maxHeight: "65vh",
          }}
        >
          <img
            src={peek.cert.preview}
            alt={peek.cert.title}
            className="w-full h-full object-contain"
          />
          <div className="px-3 py-2 text-[12px] text-white/80">
            {peek.cert.title} • {peek.cert.issuer} ({peek.cert.date})
          </div>
        </motion.div>
      )}
    </section>
  );
}
