import Loader from "widgets/Loader/Loader";
import * as cls from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
