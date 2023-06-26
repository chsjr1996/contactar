import { Components, Theme } from '@mui/material';

export const MuiTypography = (theme: Theme): Components['MuiTypography'] => ({
  styleOverrides: {
    root: {
      color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    },
  },
});
