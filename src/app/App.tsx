import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider";
import { AppRouter } from "./provider/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <Sidebar />

        <AppRouter />
      </div>
    </div>
  );
}
