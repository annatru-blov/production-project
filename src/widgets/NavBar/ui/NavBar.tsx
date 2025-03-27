import { Link } from "react-router-dom";
import * as cls from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <div className={cls.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
        {t("Главная")}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
        {t("О сайте")}
      </AppLink>
    </div>
  );
};

export default NavBar;
