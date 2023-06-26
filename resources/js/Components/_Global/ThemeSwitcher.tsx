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
import useThemeModeContext from '@Hook/themeMode';
import { ThemeModes } from '@Context/themeMode';

const ThemeSwitcher = () => {
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
      <Typography sx={{ opacity: 0.7, mb: '15px' }}>Theme mode</Typography>
      <ToggleButtonGroup
        value={themeMode}
        onChange={handleChange}
        exclusive
        fullWidth
      >
        <ToggleButton value="light">
          <WbSunnyIcon />
          <Typography sx={{ ml: '5px' }}>Light</Typography>
        </ToggleButton>
        <ToggleButton value="system">
          <SettingsBrightnessOutlinedIcon />
          <Typography sx={{ ml: '5px' }}>System</Typography>
        </ToggleButton>
        <ToggleButton value="dark">
          <DarkModeOutlinedIcon />
          <Typography sx={{ ml: '5px' }}>Dark</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export { ThemeSwitcher };
