import React, { useEffect } from 'react';
import { PageWrapper } from 'Styles/global';
import { fetchTaskData } from '../reducer/taskReducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import TaskTable from '../components/TaskTable';
const TaskPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskData());
  }, []);
  const taskData = useSelector((state: StoresState) => state.task);
  return (
    <LayoutWithSearch title="Tasks">
      <PageWrapper>
        <TaskTable data={taskData.data} />
      </PageWrapper>
    </LayoutWithSearch>
  );
};

export default TaskPage;
