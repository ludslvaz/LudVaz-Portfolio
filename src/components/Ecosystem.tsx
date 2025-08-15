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

type IconProps = { icon: string; label?: string; size?: "sm" | "lg" };

function Icon({ icon, label = "tech", size = "sm" }: IconProps) {
  const wrap =
    size === "lg"
      ? "h-16 w-16 sm:h-[72px] sm:w-[72px]"
      : "h-12 w-12 sm:h-14 sm:w-14";
  const img =
    size === "lg"
      ? "h-7 w-7 sm:h-8 sm:w-8"
      : "h-5 w-5 sm:h-6 sm:w-6";

  return (
    <div
      className={`rounded-full bg-white flex items-center justify-center shadow-md ${wrap}`}
      aria-label={label}
    >
      <img src={icon} alt={label} className={img} />
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
          <Icon icon={java} label="Java" className="col-start-1" />
          <Icon icon={sql} label="SQL" className="col-start-2" />
          <Icon icon={python} label="Python" className="col-start-3" />
          <Icon icon={html} label="HTML" className="col-start-4" />
          <Icon icon={js} label="JavaScript" className="col-start-5" />

          {/* row 2 (centralizado: cols 2,3,4) */}
          <div className="col-start-2 row-start-2">
            <Icon icon={react} label="React" />
          </div>
          <div className="col-start-3 row-start-2">
            <Icon icon={central} label="Web" size="lg" />
          </div>
          <div className="col-start-4 row-start-2">
            <Icon icon={ts} label="TypeScript" />
          </div>

          {/* row 3 (cols 2,3,4) */}
          <div className="col-start-2 row-start-3">
            <Icon icon={tailwind} label="Tailwind" />
          </div>
          <div className="col-start-3 row-start-3">
            <Icon icon={css} label="CSS" />
          </div>
          <div className="col-start-4 row-start-3">
            <Icon icon={node} label="Node.js" />
          </div>
        </div>

        {/* MOBILE: flex com quebras controladas */}
        <div className="md:hidden flex flex-col items-center justify-center gap-y-6 mt-4">
          {/* Top row */}
          <div className="flex flex-wrap justify-center gap-6 max-w-[360px]">
            <Icon icon={java} label="Java" />
            <Icon icon={sql} label="SQL" />
            <Icon icon={python} label="Python" />
            <Icon icon={html} label="HTML" />
            <Icon icon={js} label="JavaScript" />
          </div>
          {/* Middle row */}
          <div className="flex items-center justify-center gap-8">
            <Icon icon={react} label="React" />
            <Icon icon={central} label="Web" size="lg" />
            <Icon icon={ts} label="TypeScript" />
          </div>
          {/* Bottom row */}
          <div className="flex flex-wrap justify-center gap-8">
            <Icon icon={tailwind} label="Tailwind" />
            <Icon icon={css} label="CSS" />
            <Icon icon={node} label="Node.js" />
          </div>
        </div>
      </div>
    </div>
  );
}
