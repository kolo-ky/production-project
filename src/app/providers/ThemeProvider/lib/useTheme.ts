import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from './ThemeContext';
import { useContext } from 'react';

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
    }

    return { theme, toggleTheme };
}