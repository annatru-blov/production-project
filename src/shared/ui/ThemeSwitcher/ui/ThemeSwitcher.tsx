import Button, { ThemeButton } from "shared/ui/Button/Button";
import * as cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/provider/ThemeProvider";
import ThemeDark from "shared/assets/icons/theme-dark.svg";
import ThemeLight from "shared/assets/icons/theme-light.svg";



interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
     const { theme, toggleTheme } = useTheme();
  return (
    <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      { 
        theme === Theme.LIGHT ? <ThemeLight /> : <ThemeDark />
      }
    </Button>
  );
};

export default ThemeSwitcher;