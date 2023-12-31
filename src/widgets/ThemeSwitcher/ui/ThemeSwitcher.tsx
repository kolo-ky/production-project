import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets/icons';
import { Button } from 'shared/ui/Button/Button';


interface IThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} className={classNames('', {}, [className])}>
            {theme === Theme.Dark ? <DarkThemeIcon/> : <LightThemeIcon/>}
        </Button>
    );
};