import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider";
import { AppRouter } from "./provider/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";



export default function App() {
  const { theme } = useTheme();

  return (
    <Suspense fallback="loading">
      <div className={classNames("app", {}, [theme])}>
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
}
