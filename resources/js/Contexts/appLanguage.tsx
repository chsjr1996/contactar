import React, { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLangs } from '@Util/i18n';

type AppLanguageContextProviderProps = {
  children: React.ReactNode;
  defaultLanguage: AppLangs;
};

export type AppLanguageContextProps = {
  currentLanguage: AppLangs;
  changeLanguage: (lang: AppLangs) => void;
};

export const AppLanguageContext = createContext<
  AppLanguageContextProps | undefined
>(undefined);

const AppLanguageContextProvider: React.FC<AppLanguageContextProviderProps> = ({
  children,
  defaultLanguage,
}): React.JSX.Element => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] =
    useState<AppLangs>(defaultLanguage);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const changeLanguage = (lang: AppLangs) => {
    setCurrentLanguage(lang);
  };

  const contextValue = {
    currentLanguage,
    changeLanguage,
  };

  return (
    <AppLanguageContext.Provider value={contextValue}>
      {children}
    </AppLanguageContext.Provider>
  );
};

export { AppLanguageContextProvider };
