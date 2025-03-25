import { FC } from "react";
import * as cls from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...props
}: AppLinkProps) => {
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...props}>
      {children}
    </Link>
  );
};

export default AppLink;
