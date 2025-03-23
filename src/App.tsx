import { Link, Route, Routes } from "react-router-dom";
import "./index.scss";
import MainPage from "./pages/MainPage/MainPage";
import { lazy, Suspense } from "react";

const AboutPageLazy = lazy(() => import("./pages/AboutPage/AboutPage"));
const MainPageLazy = lazy(() => import("./pages/MainPage/MainPage"));

export default function App() {
  return (
    <div className="app">
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
