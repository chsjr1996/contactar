import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { SnackbarProvider } from 'notistack';

createInertiaApp({
  // eslint-disable-next-line no-undef
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(
      <SnackbarProvider
        maxSnack={10}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <App {...props} />
      </SnackbarProvider>
    );
  },
});
