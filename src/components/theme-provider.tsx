/* eslint-disable react-refresh/only-export-components */
// components/theme-provider.tsx
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeProviderState | undefined>(undefined);

/** Lê o tema salvo sem quebrar SSR */
function readStoredTheme(key: string): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    return (window.localStorage.getItem(key) as Theme | null) ?? null;
  } catch {
    return null;
  }
}

/** Aplica classe no <html> */
function applyThemeClass(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light", "dark");

  if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.add(prefersDark ? "dark" : "light");
  } else {
    root.classList.add(theme);
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  // inicia sem tocar no localStorage durante SSR
  const [theme, setThemeState] = useState<Theme>(
    () => readStoredTheme(storageKey) || defaultTheme
  );

  // aplica classes sempre que o tema muda
  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  // quando o tema for "system", reagir a troca do SO
  useEffect(() => {
    if (theme !== "system") return;

    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mql) return;

    const handler = () => applyThemeClass("system");
    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, [theme]);

  // memorizado para satisfazer exhaustive-deps
  const setTheme = useCallback(
    (next: Theme) => {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(storageKey, next);
        }
      } catch {
        /* ignore */
      }
      setThemeState(next);
    },
    [storageKey]
  );

  const value = useMemo<ThemeProviderState>(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
