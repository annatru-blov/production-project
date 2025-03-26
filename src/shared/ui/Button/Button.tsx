import { FC } from "react";
import * as cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton{
    CLEAR = 'clear'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = ({ className, children, theme, ...props }) => {
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...props}>
        { children }
    </button>
  );
};

export default Button;

