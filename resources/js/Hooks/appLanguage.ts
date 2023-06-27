import { useContext } from 'react';
import {
  AppLanguageContext,
  AppLanguageContextProps,
} from '@Context/appLanguage';

export default function useAppLanguageContext(): AppLanguageContextProps {
  const context = useContext(AppLanguageContext);

  if (context === undefined) {
    throw new Error('useAppLanguageContext must be within AppLanguageProvider');
  }

  return context;
}
