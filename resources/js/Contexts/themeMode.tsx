import React, { createContext, useState } from 'react';
import { PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import loadTheme from '@Style/theme';

type ThemeModeContextProviderProps = {
  children: React.ReactNode;
};

export type ThemeModes = PaletteMode | 'system';

export type ThemeModeContextProps = {
  currentThemeMode: ThemeModes;
  changeCurrentThemeMode: (mode: ThemeModes) => void;
  prefersDarkMode: boolean;
};

// prettier-ignore
export const ThemeModeContext = createContext<ThemeModeContextProps | undefined>(undefined);

const ThemeModeContextProvider: React.FC<ThemeModeContextProviderProps> = ({
  children,
}): JSX.Element => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const loadSavedMode = (): ThemeModes => {
    const availableModes: ThemeModes[] = ['light', 'system', 'dark'];
    const savedMode = localStorage.getItem('@themeMode') as ThemeModes;

    if (availableModes.includes(savedMode)) {
      return savedMode;
    }

    return 'light';
  };

  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeModes>(
    loadSavedMode()
  );

  const changeCurrentThemeMode = (mode: ThemeModes) => {
    setCurrentThemeMode(mode);
    localStorage.setItem('@themeMode', mode);
  };

  const contextValue = {
    currentThemeMode,
    changeCurrentThemeMode,
    prefersDarkMode,
  };

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={loadTheme(currentThemeMode, prefersDarkMode)}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export { ThemeModeContextProvider };
