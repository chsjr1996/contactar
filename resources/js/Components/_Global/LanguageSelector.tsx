import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import { router } from '@inertiajs/react';
import { MuiSelect } from './MuiSelect';
import useAppLanguageContext from '@Hook/appLanguage';
import { AppLangs } from '@Util/i18n';

const LanguageSelector: React.FC = (): JSX.Element => {
  const { currentLanguage, changeLanguage } = useAppLanguageContext();
  const { t } = useTranslation();

  const availableLangs = [
    { label: t('settings-sidebar.language-selector.en-US'), value: 'en-US' },
    { label: t('settings-sidebar.language-selector.pt-BR'), value: 'pt-BR' },
  ];

  const handleSelectedLanguage = (lang: string) => {
    changeLanguage(lang as AppLangs);

    router.post('/settings/language', { lang });
  };

  return (
    <Stack mt="40px">
      <MuiSelect
        label={t('settings-sidebar.language-selector.title')}
        name="language"
        options={availableLangs}
        defaultValue={currentLanguage}
        onChange={handleSelectedLanguage}
      />
    </Stack>
  );
};

export { LanguageSelector };
