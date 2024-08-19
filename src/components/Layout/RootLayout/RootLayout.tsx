import React from 'react';

import styles from './RootLayout.module.scss';
import { Outlet, useOutletContext } from 'react-router-dom';
import { logout, setAccessToken, useTokenStore } from '@/stores/useTokenStore';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import ReservationCard from '@/components/common/Card/ReservationCard';

type ContextType = {
  token: string;
};

const RootLayout = () => {
  const token = useTokenStore((state) => state.accessToken);

  return (
    <div className={styles.RootLayout}>
      <ReservationCard/>
      <Outlet context={{ token } satisfies ContextType} />
      {token && <BottomNavigation />}
    </div>
  );
};

export default RootLayout;

export function useToken() {
  return useOutletContext<ContextType>();
}
