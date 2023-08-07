import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface INavBarProps {
    className?: string
}

export const NavBar: FC<INavBarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <ThemeSwitcher/>

            <div className={classNames(cls.links)}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
            </div>
        </div>
    );
};
