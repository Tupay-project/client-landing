import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { I18nProvider } from '../features/i18n/i18nProvider';
import { LayoutSplashScreen, LayoutProvider } from '../features/layout/core';
import { MasterInit } from '../features/layout/MasterInit';
import { ThemeModeProvider } from '../features/partials';
import { AuthInit } from './modules/auth';


const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <ThemeModeProvider>
            <AuthInit>
              <Outlet />
              <MasterInit />
            </AuthInit>
          </ThemeModeProvider>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  );
};

export { App };
