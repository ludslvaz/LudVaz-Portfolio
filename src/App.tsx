import Navigation from "./components/header";
import { Home } from "./components/home";
import { ThemeProvider } from "./components/theme-provider"
import Services from "./components/Services";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
      <Services />
      <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
