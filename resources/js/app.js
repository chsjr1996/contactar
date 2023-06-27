import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { AppLanguageContextProvider } from '@Context/appLanguage';
import { ThemeModeContextProvider } from '@Context/themeMode';
import { initializeI18n } from '@Util/i18n';
import { get as _get } from 'lodash';

createInertiaApp({
  // eslint-disable-next-line no-undef
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    const defaultLanguage = _get(props, 'initialPage.props.applocale', 'en-US');
    initializeI18n(defaultLanguage);

    createRoot(el).render(
      <AppLanguageContextProvider defaultLanguage={defaultLanguage}>
        <ThemeModeContextProvider>
          <SnackbarProvider
            maxSnack={10}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <App {...props} />
          </SnackbarProvider>
        </ThemeModeContextProvider>
      </AppLanguageContextProvider>
    );
  },
});
