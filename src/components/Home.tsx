import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="scroll-mt-24 min-h-screen flex items-center justify-center px-4 text-foreground">
      <div className="p-8 rounded-3xl shadow-lg text-center max-w-lg w-full transition-colors duration-500 bg-[var(--card)] text-[var(--card-foreground)]">
        <img
          src="/lud.svg"
          alt="Foto de Ludmilla Vaz"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-2 border-background object-cover shadow-[0_0_20px_5px_rgba(168,85,247,0.7)] dark:shadow-[0_0_30px_10px_rgba(124,58,237,0.9)]"
        />

        <h1 className="text-2xl font-bold mb-1">Ludmilla Vaz</h1>
        <span className="text-base text-purple-600 dark:text-purple-500 font-medium">
          Desenvolvedora Front-End
        </span>
        <p className="text-white dark:text-black leading-relaxed mt-2 font-light">
          Desenvolvedora apaixonada por criar experiências digitais que unem design e funcionalidade. Sempre aprendendo, explorando novas tecnologias e buscando transformar ideias em realidade.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.instagram.com/ludvazz_"
            target="_blank"
            rel="noreferrer"
            className="group bg-[var(--card-foreground)]/10 hover:bg-[var(--card-foreground)]/20 text-[var(--card-foreground)] p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://github.com/ludslvaz"
            target="_blank"
            rel="noreferrer"
            className="group bg-[var(--card-foreground)]/10 hover:bg-[var(--card-foreground)]/20 text-[var(--card-foreground)] p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ludmilla-vaz-93b226217"
            target="_blank"
            rel="noreferrer"
            className="group bg-[var(--card-foreground)]/10 hover:bg-[var(--card-foreground)]/20 text-[var(--card-foreground)] p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
