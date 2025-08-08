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

export default function Ecosystem() {
  return (
    <div className="w-full overflow-x-hidden px-4">
      <div className="flex flex-col items-center justify-center gap-y-6 mt-4 sm:mt-20">
        {/* Top row */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-[400px] sm:max-w-full">
          <Icon icon={java} />
          <Icon icon={sql} />
          <Icon icon={python} />
          <Icon icon={html} />
          <Icon icon={js} />
        </div>

        {/* Middle row */}
        <div className="flex flex-wrap justify-center items-center gap-20 sm:gap-30 mt-5">
          <Icon icon={react} />
          <Icon icon={central} />
          <Icon icon={ts} />
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap justify-center gap-20 sm:gap-30 mt-5">
          <Icon icon={tailwind} />
          <Icon icon={css} />
          <Icon icon={node} />
        </div>
      </div>
    </div>
  );
}

function Icon({ icon }: { icon: string }) {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md">
      <img src={icon} alt="tech" className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
  );
}
