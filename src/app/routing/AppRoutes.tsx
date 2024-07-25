import { FC } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { ErrorsPage } from '../modules/errors/ErrorsPage'
import { Logout, AuthPage, useAuth } from '../modules/auth'
import { App } from '../App'
import LandingPage from '../../landing/LandingPage'

const { BASE_URL } = import.meta.env

const AppRoutes: FC = () => {
  const { currentUser } = useAuth()

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {/* Comentado la protección de rutas */}
      
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='landing' element={<LandingPage />} />
              <Route path='*' element={<Navigate to='/landing' />} />
            </>
          )}
        
          {/* Descomentar esta sección para hacer todas las rutas accesibles */}
          <Route path='/*' element={<PrivateRoutes />} />
          <Route path='auth/*' element={<AuthPage />} />
          <Route path='landing' element={<LandingPage />} />
          <Route path='*' element={<Navigate to='/landing' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
