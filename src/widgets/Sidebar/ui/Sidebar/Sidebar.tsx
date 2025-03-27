import { useState } from "react";
import * as cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}


const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
 
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
        
        <Button onClick={onToggle}> Toggle </Button>
        <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher  />
        </div>
    </div>
  );
};

export default Sidebar;