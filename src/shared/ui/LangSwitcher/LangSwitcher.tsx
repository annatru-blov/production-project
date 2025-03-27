import { useTranslation } from "react-i18next";
import * as cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "../Button/Button";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={changeLanguage}>
        {t("Язык")}
      </Button>
    </div>
  );
};

export default LangSwitcher;
