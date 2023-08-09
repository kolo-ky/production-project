import { createContext } from 'react';

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export interface IThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_KEY = 'theme';