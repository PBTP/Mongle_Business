import React from 'react';

import styles from './RootLayout.module.scss';
import { Outlet, useOutletContext } from 'react-router-dom';
import { logout, setAccessToken, useTokenStore } from '@/stores/useTokenStore';

type ContextType = {
  token: string;
};

const RootLayout = () => {
  const token = useTokenStore((state) => state.accessToken);

  return (
    <div className={styles.RootLayout}>
      <Outlet context={{ token } satisfies ContextType} />
    </div>
  );
};

export default RootLayout;

export function useToken() {
  return useOutletContext<ContextType>();
}
