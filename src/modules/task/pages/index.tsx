import React from 'react';
import { PageWrapper } from 'Styles/global';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import TaskTable from '../components/TaskTable';
import { useGetUserTasksQuery } from '../../../common/generated/generated-types';
import { Loading } from '../../../common/components/Loader/styled';
import { taskActions } from '../reducer/taskReducer';

const TaskPage: React.FC = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((state: StoresState) => state.task.present.tasks);
  const userId = useSelector((state: StoresState) => state.user.user.id);
  const { data, loading, error } = useGetUserTasksQuery({
    variables: {
      userId: userId,
    },
  });
  if (data) dispatch(taskActions.setTaskData({ data: data.GetUserTasks }));

  return (
    <LayoutWithSearch title="Tasks">
      <PageWrapper>
        {error ? <p>{error}</p> : loading ? <Loading /> : <TaskTable data={taskData} />}
      </PageWrapper>
    </LayoutWithSearch>
  );
};

export default TaskPage;
