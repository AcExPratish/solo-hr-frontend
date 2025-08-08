import AppProvider from 'providers/AppProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import SettingsPanelProvider from 'providers/SettingsPanelProvider';
import { RouterProvider } from 'react-router-dom';

import { router } from 'routes';
import { store } from './store';
import { Provider as ReduxProvider } from 'react-redux';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppProvider>
        <SettingsPanelProvider>
          <BreakpointsProvider>
            <RouterProvider router={router} />
          </BreakpointsProvider>
        </SettingsPanelProvider>
      </AppProvider>
    </ReduxProvider>
  </React.StrictMode>
);
