import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { lazy, Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider";

const AboutPageLazy = lazy(() => import("pages/AboutPage/ui/AboutPage"));
const MainPageLazy = lazy(() => import("pages/MainPage/ui/MainPage"));

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Темная тема</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}
