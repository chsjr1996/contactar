import React, { createContext, useState } from 'react';
import { PaletteMode, useMediaQuery } from '@mui/material';

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

  return (
    <ThemeModeContext.Provider
      value={{ currentThemeMode, changeCurrentThemeMode, prefersDarkMode }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

export { ThemeModeContextProvider };
