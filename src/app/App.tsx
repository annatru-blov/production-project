import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider";
import { AppRouter } from "./provider/router";
import { NavBar } from "widgets/NavBar";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
     
      <NavBar />
      <AppRouter />
      <button onClick={toggleTheme}>Темная тема</button>
    </div>
  );
}
