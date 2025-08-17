// components/OpeningIntro.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useMemo, useState } from "react";

type OpeningIntroProps = {
  oncePerSession?: boolean;
  onFinish?: () => void;
  headlineTop?: string;          // "Welcome To My"
  headlineBottom?: string;       // "Portfolio Website"
  linkText?: string;             // "www.seudominio.com"
};

export default function OpeningIntro({
  oncePerSession = false,
  onFinish,
  headlineTop = "Bem-vindo(a) ao",
  headlineBottom = "Meu Portfólio",
  linkText = "www.ludvaz.vercel.app",
}: OpeningIntroProps) {
  // começa visível para evitar flash do conteúdo de fundo
  const [visible, setVisible] = useState(true);

  // decide antes de pintar se deve esconder
  useLayoutEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVisible(false); return; }

    if (oncePerSession && typeof window !== "undefined") {
      if (sessionStorage.getItem("intro_done") === "1") {
        setVisible(false);
      }
    }
  }, [oncePerSession]);

  const close = () => {
    setVisible(false);
    if (oncePerSession) sessionStorage.setItem("intro_done", "1");
    onFinish?.();
  };

  // typewriter do link
  const [typed, setTyped] = useState("");
  useLayoutEffect(() => {
    if (!visible) return;
    let i = 0;
    const id = setInterval(() => {
      setTyped(linkText.slice(0, i));
      i++;
      if (i > linkText.length) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, [visible, linkText]);

  // ===== Variants =====
  const easeSoft: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: easeSoft,
          when: "beforeChildren",
          staggerChildren: 0.14, // controla o "ir aparecendo"
        },
      },
      exit: { opacity: 0, transition: { duration: 0.35 } },
    }),
    []
  );

  const fadeUpSoft = {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: easeSoft },
    },
  };

  const iconPop = {
    hidden: { opacity: 0, y: 12, scale: 0.96, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: easeSoft },
    },
  };

  const bgGlow = {
    hidden: { opacity: 0, scale: 1.02 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: easeSoft } },
  };

  if (!visible) return null;

  return (
    // IMPORTANTE: não use initial={false} aqui
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-40 bg-[#0b0814]"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={container}
          aria-label="Abertura"
        >
          {/* Fundo com animação suave */}
          <motion.div
            variants={bgGlow}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_60%_at_8%_0%,rgba(168,85,247,.25),transparent_40%),radial-gradient(90%_70%_at_100%_20%,rgba(56,189,248,.18),transparent_40%)]"
          />
          <motion.div
            variants={bgGlow}
            className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          >
            <div className="noise-layer h-full w-full" />
          </motion.div>

          {/* Conteúdo central */}
          <div className="relative grid h-full place-items-center px-4">
            <motion.div className="w-full max-w-5xl" variants={container}>
              {/* 1) Trio de ícones (participam do stagger) */}
              <motion.div
                className="mb-10 flex items-center justify-center gap-4 sm:gap-6"
                variants={fadeUpSoft}
              >
                <IconBox ariaLabel="Code" variants={iconPop}>{CodeIcon}</IconBox>
                <IconBox ariaLabel="User" variants={iconPop}>{UserIcon}</IconBox>
                <IconBox ariaLabel="GitHub" variants={iconPop}>{GitHubIcon}</IconBox>
              </motion.div>

              {/* 2) Título em duas linhas */}
              <div className="text-center">
                <motion.h1
                  variants={fadeUpSoft}
                  className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
                >
                  {headlineTop}
                </motion.h1>

                <motion.h2
                  variants={fadeUpSoft}
                  className="mt-2 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300"
                >
                  {headlineBottom}
                </motion.h2>
              </div>

              {/* 3) Glass pill com link digitando */}
              <motion.div variants={fadeUpSoft} className="mx-auto mt-8 w-full max-w-[520px]">
                <div
                  className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 sm:px-6 sm:py-4
                             backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,.35)] ring-1 ring-white/5
                             hover:border-white/25 transition"
                >
                  {/* globo */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                    <path d="M3 12h18M12 3c2.5 3.5 2.5 14 0 18M7 6.5c3 .8 7 .8 10 0M7 17.5c3-.8 7-.8 10 0" />
                  </svg>

                  <code className="font-mono text-base sm:text-lg text-white/90">
                    <span>{typed}</span>
                    <span className="typing-caret" />
                  </code>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Iris reveal para fechar */}
          <motion.div
            aria-hidden
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(140% at 50% 50%)" }}
            transition={{ delay: 2.0, duration: 1.5, ease: easeSoft }}
            onAnimationComplete={close}
            className="absolute inset-0 bg-transparent"
            style={{ willChange: "clip-path" }}
          />

          {/* pular intro */}
          <button
            onClick={close}
            className="absolute top-6 right-6 rounded-full border border-white/15 bg-purple-400/20 px-3 py-1.5 text-xs text-purple-600 dark:text-purple-300 font-light hover:bg-white/10 transition"
          >
            Pular intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Components auxiliares ---------- */
function IconBox({
  children,
  ariaLabel,
  variants,
}: {
  children: (props: { className?: string }) => JSX.Element;
  ariaLabel: string;
  variants?: any;
}) {
  const Icon = children;
  return (
    <motion.div
      variants={variants} // <- agora herda o stagger/initial/animate do container
      className="grid h-[58px] w-[58px] place-items-center rounded-2xl border border-white/15 bg-white/5
                 shadow-[0_6px_24px_rgba(0,0,0,.35)] ring-1 ring-white/5
                 transition duration-300 will-change-transform
                 hover:scale-110 hover:border-violet-400/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
      aria-label={ariaLabel}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 22px rgba(139,92,246,0.55)",
        borderColor: "rgba(139,92,246,0.6)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      <Icon className="h-6 w-6 text-white/80" />
    </motion.div>
  );
}

/* SVGs (sem dependências externas) */
const CodeIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="m8 16-4-4 4-4" />
    <path d="m16 8 4 4-4 4" />
    <path d="m14 4-4 16" />
  </svg>
);

const UserIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
    <path d="M20 21a8 8 0 1 0-16 0" />
  </svg>
);

const GitHubIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.5 1.3-3.4-.1-.3-.6-1.7.1-3.6 0 0 1-.3 3.5 1.3a12 12 0 0 1 6.4 0c2.5-1.6 3.5-1.3 3.5-1.3.7 1.9.2 3.3.1 3.6.8.9 1.3 2.1 1.3 3.4 0 4.7-2.9 5.8-5.6 6.1.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
  </svg>
);
