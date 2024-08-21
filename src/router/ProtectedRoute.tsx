import BottomNavigation from '@/components/Layout/BottomNavigation/BottomNavigation';
import { useToken } from '@/components/Layout/RootLayout/RootLayout';
import { useTokenStore } from '@/stores/useTokenStore';
import { Navigate, Outlet, useOutletContext } from 'react-router';

const ProtectedRoute = () => {
  const { token } = useToken();

  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        <>
          {/* TODO:로그인 로직이 들어오면 변경한다.
          <Navigate to="/" replace={true} />
        */}
          <Outlet />
        </>
      )}
    </>
  );
};

export default ProtectedRoute;
