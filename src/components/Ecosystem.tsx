import java from "../assets/java.svg";
import sql from "../assets/sql.svg";
import python from "../assets/python.svg";
import html from "../assets/html5.svg";
import js from "../assets/javascript.svg";
import ts from "../assets/typescript.svg";
import node from "../assets/nodejs.svg";
import css from "../assets/css3.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import central from "../assets/web.svg";

type IconProps = {
  icon: string;
  label?: string;
  size?: "sm" | "md" | "lg";          // tamanho da bolinha
  iconSize?: "sm" | "md" | "lg" | "xl"; // tamanho do ícone dentro
  className?: string;
};

function Icon({
  icon,
  label = "tech",
  size = "sm",
  iconSize = "md",
  className,
}: IconProps) {
  const wrap = {
    sm: "h-12 w-12",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  }[size];

  const img = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-7 w-7",
    xl: "h-12 w-12",
  }[iconSize];

  return (
    <div
      className={`rounded-full border border-violet-500/80 dark:border-none bg-white dark:bg-violet-500/15 flex items-center justify-center shadow-md ${wrap} ${className ?? ""}`}
      aria-label={label}
    >
      <img src={icon} alt={label} className={`${img}`} />
    </div>
  );
}

export default function Ecosystem() {
  return (
    <div className="w-full px-2">
      <div className="mx-auto max-w-[600px]">
        {/* DESKTOP / TABLET: grid fixo 5 colunas */}
        <div className="hidden md:grid grid-cols-5 gap-x-10 gap-y-10 lg:gap-x-12 lg:gap-y-12 place-items-center">
          {/* row 1 */}
          <Icon icon={java} label="Java" iconSize="lg" className="col-start-1" />
          <Icon icon={sql} label="SQL" iconSize="lg" className="col-start-2" />
          <Icon icon={python} label="Python" iconSize="lg" className="col-start-3" />
          <Icon icon={html} label="HTML" iconSize="lg" className="col-start-4" />
          <Icon icon={js} label="JavaScript" iconSize="lg" className="col-start-5" />

          {/* row 2 (centralizado: cols 2,3,4) */}
          <Icon icon={react} label="React" iconSize="lg" className="col-start-2 row-start-2" />
          <Icon
            icon={central}
            label="Web"
            size="lg"
            iconSize="xl"
            className="col-start-3 row-start-2"
          />
          <Icon icon={ts} label="TypeScript" iconSize="lg" className="col-start-4 row-start-2" />

          {/* row 3 (cols 2,3,4) */}
          <Icon icon={tailwind} label="Tailwind" iconSize="lg" className="col-start-2 row-start-3" />
          <Icon icon={css} label="CSS" iconSize="lg" className="col-start-3 row-start-3" />
          <Icon icon={node} label="Node.js" iconSize="lg" className="col-start-4 row-start-3" />
        </div>

        {/* MOBILE: flex com quebras controladas */}
        <div className="md:hidden flex flex-col items-center justify-center gap-y-6 mt-4">
          {/* Top row */}
          <div className="flex flex-wrap justify-center gap-6 max-w-[360px]">
            <Icon icon={java} label="Java" iconSize="lg" />
            <Icon icon={sql} label="SQL" iconSize="lg" />
            <Icon icon={python} label="Python" iconSize="lg" />
            <Icon icon={html} label="HTML" iconSize="lg" />
            <Icon icon={js} label="JavaScript" iconSize="lg" />
          </div>

          {/* Middle row */}
          <div className="flex items-center justify-center gap-8">
            <Icon icon={react} label="React" iconSize="lg" />
            <Icon icon={central} label="Web" size="lg" iconSize="xl" />
            <Icon icon={ts} label="TypeScript" iconSize="lg" />
          </div>

          {/* Bottom row */}
          <div className="flex flex-wrap justify-center gap-8">
            <Icon icon={tailwind} label="Tailwind" iconSize="lg" />
            <Icon icon={css} label="CSS" iconSize="lg" />
            <Icon icon={node} label="Node.js" iconSize="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
