import { createTheme } from '@mui/material';
import setPaletteOptions from './ThemeOptions/setPaletteOptions';
import { ThemeModes } from '@Context/themeMode';
import { createOverrides } from './ThemeOverrides';

const loadTheme = (mode: ThemeModes, prefersDarkMode = false) => {
  const theme = createTheme({
    palette: setPaletteOptions(mode, prefersDarkMode),
  });

  theme.components = createOverrides(theme);

  return theme;
};

export default loadTheme;
