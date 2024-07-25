import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import backgroundImage from '../../../features/assets/images/fondoLogin.png';

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.height = '100%';
    }
    return () => {
      if (root) {
        root.style.height = 'auto';
      }
    };
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  // Determine width based on the current path
  const getWidth = () => {
    if (currentPath.includes('/login')) {
      return '100%';
    } else if (currentPath.includes('/registration')) {
      return '50%';
    }
    return '100%'; // Default width if no specific path is matched
  };

  return (
    <div
      className='d-flex flex-column flex-lg-row flex-column-fluid'
      style={{
        width: '100vw',
        height: 'auto',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1 w-100 h-100'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid w-100 h-100'>
          {/* begin::Wrapper */}
          <div
            style={{
              width: getWidth(),
              height: '100%',
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export { AuthLayout };
