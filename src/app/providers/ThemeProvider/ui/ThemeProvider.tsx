import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
import { FC, useMemo, useState } from 'react';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.Light;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
