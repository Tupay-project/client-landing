import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../features/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/Inicio/DashboardWrapper'
// import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../features/assets/ts/_utils'
import {WithChildren} from '../../features/helpers'
// import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { DashboardWrapperDispersion } from '../pages/dispersion/DispersionDashboardWrapper'
import { DashboardWrapperIngress } from '../pages/Ingresos/IngressDashboardWrapper'
import { DashboardWrapperSalida } from '../pages/salidas/SalidasDashboardWrapper'
import { DashboardWrapperTarget } from '../pages/Targetas/TargetDashboardWrapper'
import UsersPage from '../modules/apps/user-management/UsersPage'
import { DashboardWrapperDetail } from '../pages/Detail/DetailDashboardWrapper'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  // const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  // const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  // const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  // const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        {/* <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} /> */}
        {/* nuevas */}
        <Route path='Salidas' element={<DashboardWrapperSalida />} />
        <Route path='Ingresos' element={<DashboardWrapperIngress />} />
        <Route path='Targetas' element={<DashboardWrapperTarget />} />
        <Route path='usdt-dispersion' element={<DashboardWrapperDispersion />} />
        <Route path='Detail' element={<DashboardWrapperDetail />} />
        
        
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        {/* <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        /> */}
        {/* <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        /> */}
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        {/* <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        /> */}
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
