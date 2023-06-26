import { Components, Theme } from '@mui/material';
import { MuiTypography } from './MuiTypography';

export const createOverrides = (theme: Theme): Components => ({
  MuiTypography: MuiTypography(theme),
});
