import HistoryPages from 'Modules/history/pages';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';

const History: React.FC = () => {
  return (
    <RouterGuard>
      <HistoryPages />
    </RouterGuard>
  );
};

export default History;
