import OpeningIntro from "./components/OpeningIntro";
import Navigation from "./components/header";
import  Home  from "./components/Home";
import { ThemeProvider } from "./components/theme-provider";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <OpeningIntro oncePerSession={false} />

        <Home />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
