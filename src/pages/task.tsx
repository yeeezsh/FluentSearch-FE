import TaskPage from 'Modules/task/pages/';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';

const Task: React.FC = () => {
  return (
    <RouterGuard>
      <TaskPage />
    </RouterGuard>
  );
};

export default Task;
