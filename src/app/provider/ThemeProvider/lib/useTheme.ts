import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "app/provider/ThemeProvider/lib/ThemeContext";

interface ThemeContextProps {
  toggleTheme: () => void;
  theme: Theme;
}
export function useTheme(): ThemeContextProps {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme,
    toggleTheme,
  };
}
