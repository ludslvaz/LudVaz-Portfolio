import {
  Briefcase,
  Folder,
  GraduationCap,
  Home,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../components/theme-provider"; // certifique-se que isso está exportando { theme, setTheme }

const Icon = ({
  children,
  state,
  ...props
}: {
  children: React.ReactNode;
  state: boolean;
}) => {
  const baseClass =
    "flex items-center justify-center rounded-full transition-all duration-300 p-2 hover:scale-105 hover:px-4";

  if (state) {
    return (
      <div className={`${baseClass} bg-black/10`} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div className={`${baseClass} hover:bg-zinc-100 dark:hover:bg-zinc-800`} {...props}>
      {children}
    </div>
  );
};

export default function Navigation() {
  const [home, setHome] = useState(true);
  const [folder, setFolder] = useState(false);
  const [gift, setGift] = useState(false);
  const [graduation, setGraduation] = useState(false);

  const { theme, setTheme } = useTheme(); // usando o contexto global de tema

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="backdrop-blur-2xl rounded-xl flex px-3 py-2 gap-x-4 border border-black/20 dark:border-white/10 duration-200 transition-all hover:gap-x-6">
        <Icon state={home}>
          <Home size={18} className="text-black/50 dark:text-white/60" />
        </Icon>
        <div className="w-[0.1rem] bg-black/20 dark:bg-white/20" />
        <Icon state={folder}>
          <Folder size={18} strokeWidth={1.5} />
        </Icon>
        <Icon state={gift}>
          <Briefcase size={18} strokeWidth={1.5} />
        </Icon>
        <Icon state={graduation}>
          <GraduationCap size={18} strokeWidth={1.5} />
        </Icon>
        <Icon state={false}>
          <Mail size={18} strokeWidth={1.5} />
        </Icon>
        <div className="w-[0.1rem] bg-black/20 dark:bg-white/20" />
        <Icon state={false} onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Icon>
      </div>
    </div>
  );
}
