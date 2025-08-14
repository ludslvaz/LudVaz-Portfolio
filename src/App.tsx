import Navigation from "./components/header";
import { Home } from "./components/home";
import { ThemeProvider } from "./components/theme-provider"
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
      <Services />
      <Projects />
      <Experience />
      <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
