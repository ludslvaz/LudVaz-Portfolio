import {
  Briefcase,
  Folder,
  Gift,
  GraduationCap,
  Home,
  Mail,
  Moon,
} from "lucide-react";
import { useState } from "react";

const Icon = ({
  children,
  state,
  ...props
}: {
  children: React.ReactNode;
  state: boolean;
}) => {
  if (state) {
    return (
      <div
        className="rounded-full transition-all duration-300 p-2 bg-black/10 hover:rounded-full hover:scale-105 hover:px-4"
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="rounded-full transition-all duration-300 p-2 hover:bg-black/10 hover:scale-105 hover:px-4"
      {...props}
    >
      {children}
    </div>
  );
};

export default function Navigation() {
  const [home, setHome] = useState<boolean>(true);
  const [folder, setFolder] = useState<boolean>(false);
  const [gift, setGift] = useState<boolean>(false);
  const [graduation, setGraduation] = useState<boolean>(false);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="backdrop-blur-2xl shadow-md rounded-xl flex px-3 py-2 gap-x-4 border border-black/20 duration-200 transition-all hover:gap-x-6">
        <Icon state={home}>
          <Home className="text-black/50" />
        </Icon>
        <div className="w-[0.1rem] bg-black/20" />
        <Icon state={folder}>
          <Folder strokeWidth={1.5} />
        </Icon>
        <Icon state={gift}>
          <Briefcase strokeWidth={1.5} />
        </Icon>
        <Icon state={graduation}>
          <GraduationCap strokeWidth={1.5} />
        </Icon>
        <Icon state={false}>
          <Mail strokeWidth={1.5} />
        </Icon>
        <div className="w-[0.1rem] bg-black/20" />
        <Icon state={false}>
          <Moon strokeWidth={1.5} />
        </Icon>
      </div>
    </div>
  );
}
