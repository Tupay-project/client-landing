import { createRoot } from 'react-dom/client';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import './features/assets/sass/style.react.scss';
import './features/assets/fonticon/fonticon.css';
import './features/assets/keenicons/duotone/style.css';
import './features/assets/keenicons/outline/style.css';
import './features/assets/keenicons/solid/style.css';
import './features/assets/sass/style.scss';
import { AppRoutes } from './app/routing/AppRoutes';
import { AuthProvider, setupAxios } from './app/modules/auth';
import { I18nProvider } from './features/i18n/Metronici18n';

setupAxios(axios);
Chart.register(...registerables);

const queryClient = new QueryClient();
const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </I18nProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
