import { Link } from "react-router-dom";
import * as cls from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <div className={cls.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>Главная</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О сайте</AppLink>
    </div>
  );
};

export default NavBar;