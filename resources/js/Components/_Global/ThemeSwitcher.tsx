import React, { useState } from 'react';
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useTranslation } from 'react-i18next';
import useThemeModeContext from '@Hook/themeMode';
import { ThemeModes } from '@Context/themeMode';

const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const { currentThemeMode, changeCurrentThemeMode } = useThemeModeContext();
  const [themeMode, setThemeMode] = useState<ThemeModes>(currentThemeMode);

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    selectedMode: ThemeModes
  ) => {
    setThemeMode(selectedMode);
    changeCurrentThemeMode(selectedMode);
  };

  return (
    <Stack>
      <Typography sx={{ opacity: 0.7, mb: '15px' }}>
        {t('settings-sidebar.theme-switcher.title')}
      </Typography>
      <ToggleButtonGroup
        value={themeMode}
        onChange={handleChange}
        exclusive
        fullWidth
      >
        <ToggleButton value="light">
          <WbSunnyIcon />
          <Typography sx={{ ml: '5px' }}>
            {t('settings-sidebar.theme-switcher.light-theme')}
          </Typography>
        </ToggleButton>
        <ToggleButton value="system">
          <SettingsBrightnessOutlinedIcon />
          <Typography sx={{ ml: '5px' }}>
            {t('settings-sidebar.theme-switcher.system-theme')}
          </Typography>
        </ToggleButton>
        <ToggleButton value="dark">
          <DarkModeOutlinedIcon />
          <Typography sx={{ ml: '5px' }}>
            {t('settings-sidebar.theme-switcher.dark-theme')}
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export { ThemeSwitcher };
