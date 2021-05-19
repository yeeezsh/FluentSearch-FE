import DashboardPage from 'Modules/dashboard/pages/index';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';

const Dashboard: React.FC = () => {
  return (
    <RouterGuard>
      <DashboardPage />
    </RouterGuard>
  );
};

export default Dashboard;
