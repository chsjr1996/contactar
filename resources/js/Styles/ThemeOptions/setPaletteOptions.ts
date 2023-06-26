import { PaletteOptions } from '@mui/material';
import { ThemeModes } from '@Context/themeMode';

export default function setPaletteOptions(
  mode: ThemeModes,
  prefersDarkMode: boolean
): PaletteOptions {
  let currentMode = mode;

  if (currentMode === 'system') {
    currentMode = prefersDarkMode ? 'dark' : 'light';
  }

  return { mode: currentMode };
}
