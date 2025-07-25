import Navigation from "./components/header";
import { Home } from "./components/home";
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
      <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
