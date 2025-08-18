// src/components/header.tsx
import {
  Briefcase,
  Folder,
  GraduationCap,
  Home,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../components/theme-provider";

type IconVariant = "toggle" | "ghost";

type IconProps = {
  children: React.ReactNode;
  state?: boolean;
  label: string;
  onClick?: () => void;
  variant?: IconVariant;
};

const Icon = ({
  children,
  state = false,
  label,
  onClick,
  variant = "toggle",
}: IconProps) => {
  const [touchTip, setTouchTip] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  // mostra o tooltip em dispositivos sem hover (touch/coarse)
  const flashTooltipOnTouch = () => {
    const noHover =
      typeof window !== "undefined" &&
      (window.matchMedia("(hover: none)").matches ||
        window.matchMedia("(pointer: coarse)").matches);
    if (!noHover) return;
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setTouchTip(true);
    timeoutRef.current = window.setTimeout(() => setTouchTip(false), 900);
  };

  const baseClass =
    "group relative flex items-center justify-center rounded-full transition-all duration-300 p-2 " +
    "hover:scale-105 hover:px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40";

  const bgClass =
    variant === "toggle" && state
      ? "bg-black/10 dark:bg-white/10"
      : "hover:bg-zinc-100 dark:hover:bg-zinc-800 active:bg-zinc-800/30 dark:active:bg-zinc-100/10";

  return (
    <button
      type="button"
      onClick={onClick}
      onPointerDown={flashTooltipOnTouch}
      onPointerLeave={() => setTouchTip(false)}
      onPointerCancel={() => setTouchTip(false)}
      aria-label={label}
      aria-pressed={variant === "toggle" ? state : undefined}
      className={`${baseClass} ${bgClass}`}
      onPointerUp={(e) => {
        // Em "ghost", tira o foco após clique com mouse/pen (não em touch)
        if (variant === "ghost" && (e.pointerType === "mouse" || e.pointerType === "pen")) {
          (e.currentTarget as HTMLButtonElement).blur();
        }
      }}
    >
      {children}

      <span
        role="tooltip"
        data-show={touchTip ? "true" : "false"}
        className="
          pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-10
          whitespace-nowrap rounded-md bg-zinc-900 text-white text-[12px] font-normal leading-none
          px-2 py-1 opacity-0 scale-95
          shadow-lg/50 shadow-black/30 transition duration-150
          group-hover:opacity-100 group-hover:scale-100
          data-[show=true]:opacity-100 data-[show=true]:scale-100
          dark:bg-zinc-100 dark:text-zinc-900
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
          after:top-full after:-mt-1 after:h-2 after:w-2 after:rotate-45
          after:bg-zinc-900 dark:after:bg-zinc-100 after:shadow-[0_1px_4px_rgba(0,0,0,0.25)]
        "
      >
        {label}
      </span>
    </button>
  );
};

export default function Navigation() {
  const [home, setHome] = useState(true);
  const [folder, setFolder] = useState(false);
  const [gift, setGift] = useState(false);
  const [graduation, setGraduation] = useState(false);

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const setActive = (
    key: "home" | "folder" | "gift" | "graduation"
  ) => {
    setHome(key === "home");
    setFolder(key === "folder");
    setGift(key === "gift");
    setGraduation(key === "graduation");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  // Abre o compose do Gmail; se bloquear popup, cai no mailto:
  const openEmail = () => {
    const to = "ludvazdev@gmail.com";
    const subject = "Olá! Vim pelo portfólio";
    const body = `Olá Ludmilla,

Vi seu portfólio e gostaria de conversar sobre um projeto/oportunidade.
Podemos falar?

Obrigado(a),
<Seu nome>`;

    const gmailURL =
      `https://mail.google.com/mail/?view=cm&fs=1&tf=1` +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const win = window.open(gmailURL, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href =
        `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  useEffect(() => {
    const mapIdToKey: Record<string, "home" | "folder" | "gift" | "graduation"> = {
      home: "home",
      projects: "folder",
      experience: "gift",
      education: "graduation",
    };

    const ids = Object.keys(mapIdToKey);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = (visible.target as HTMLElement).id;
        const key = mapIdToKey[id];
        if (key) setActive(key);
      },
      { root: null, rootMargin: "-45% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed z-50 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="backdrop-blur-2xl rounded-xl flex px-3 py-2 gap-x-4 border border-black/20 dark:border-white/10 duration-200 transition-all hover:gap-x-6">
        <Icon state={home} label="Início" onClick={() => { setActive("home"); scrollToSection("home"); }}>
          <Home size={18} className="text-black/60 dark:text-white/70" />
        </Icon>

        <div className="w-[0.08rem] bg-black/15 dark:bg-white/15" />

        <Icon state={folder} label="Projetos" onClick={() => { setActive("folder"); scrollToSection("projects"); }}>
          <Folder size={18} strokeWidth={1.5} />
        </Icon>

        <Icon state={gift} label="Experiência" onClick={() => { setActive("gift"); scrollToSection("experience"); }}>
          <Briefcase size={18} strokeWidth={1.5} />
        </Icon>

        <Icon state={graduation} label="Formação" onClick={() => { setActive("graduation"); scrollToSection("education"); }}>
          <GraduationCap size={18} strokeWidth={1.5} />
        </Icon>

        {/* E-mail: abre compose; não “seleciona” (ghost) */}
        <Icon variant="ghost" label="E-mail" onClick={openEmail}>
          <Mail size={18} strokeWidth={1.5} />
        </Icon>

        <div className="w-[0.08rem] bg-black/15 dark:bg-white/15" />

        <Icon variant="ghost" label={theme === "dark" ? "Modo claro" : "Modo escuro"} onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Icon>
      </div>
    </div>
  );
}
