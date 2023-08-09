import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        to,
        children,
        ...otherProps
    } = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};