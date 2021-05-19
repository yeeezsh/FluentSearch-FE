import LogoutPage from 'Modules/user/pages/login';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';

const Logout: React.FC = () => {
  return (
    <RouterGuard>
      <LogoutPage />
    </RouterGuard>
  );
};

export default Logout;
