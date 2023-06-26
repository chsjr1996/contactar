import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material';
import loadTheme from '@Style/theme';
import {
  ThemeModeContext,
  ThemeModeContextProvider,
} from './Contexts/themeMode';

createInertiaApp({
  // eslint-disable-next-line no-undef
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(
      <ThemeModeContextProvider>
        <ThemeModeContext.Consumer>
          {({ currentThemeMode, prefersDarkMode }) => (
            <ThemeProvider theme={loadTheme(currentThemeMode, prefersDarkMode)}>
              <SnackbarProvider
                maxSnack={10}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <App {...props} />
              </SnackbarProvider>
            </ThemeProvider>
          )}
        </ThemeModeContext.Consumer>
      </ThemeModeContextProvider>
    );
  },
});
