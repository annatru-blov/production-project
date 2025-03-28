import { useTranslation } from "react-i18next";
import * as cls from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
  </div>;
};

export default NotFoundPage;
