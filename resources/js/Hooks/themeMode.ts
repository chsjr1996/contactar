import { useContext } from 'react';
import { ThemeModeContext, ThemeModeContextProps } from '@Context/themeMode';

export default function useThemeModeContext(): ThemeModeContextProps {
  const context = useContext(ThemeModeContext);

  if (context === undefined) {
    throw new Error('useThemeModeContext must be within ThemeModeProvider');
  }

  return context;
}
