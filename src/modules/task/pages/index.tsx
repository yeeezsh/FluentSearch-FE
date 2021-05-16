import React, { useEffect } from 'react';
import { PageWrapper } from 'Styles/global';
import { fetchTaskData } from '../reducer/taskReducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import TaskTable from '../components/TaskTable';

const TaskPage: React.FC = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((state: StoresState) => state.task.present.queue);

  useEffect(() => {
    dispatch(fetchTaskData());
  }, []);

  return (
    <LayoutWithSearch title="Tasks">
      <PageWrapper>
        <TaskTable data={taskData} />
      </PageWrapper>
    </LayoutWithSearch>
  );
};

export default TaskPage;
