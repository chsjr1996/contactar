import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material';
import loadTheme from '@Style/theme';
import { ThemeModeContext, ThemeModeContextProvider } from '@Context/themeMode';
import { initializeI18n } from '@Util/i18n';

// TODO: Move it to ContentProvider to allow to change it on the fly...
initializeI18n('en-US');
createInertiaApp({
  // eslint-disable-next-line no-undef
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(
      <ThemeModeContextProvider>
        <ThemeModeContext.Consumer>
          {({ currentThemeMode, prefersDarkMode }) => (
            // TODO: Create a custom "ThemeProvider Wrapper" to move 'ThemeMode' stuff to inside of this...
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
