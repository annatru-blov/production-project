import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { lazy, Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "./themes/ThemeContext";
import { useTheme } from "./themes/useTheme";

const AboutPageLazy = lazy(() => import("./pages/AboutPage/AboutPage"));
const MainPageLazy = lazy(() => import("./pages/MainPage/MainPage"));

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
