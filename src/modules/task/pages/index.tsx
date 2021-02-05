import React, { useEffect } from 'react';
import { columns } from 'Modules/task/models/constant';
import { PurpleTable, PageWrapper } from 'Styles/global';
import { fetchTaskData } from '../reducer/taskReducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
const TaskPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskData());
  }, []);
  const taskData = useSelector((state: StoresState) => state.task);
  return (
    <PageWrapper>
      <h3>Task</h3>
      <hr />
      <PurpleTable
        dataSource={taskData.data}
        columns={columns}
        style={{ marginTop: '30px' }}
        pagination={{ position: ['bottomCenter'] }}
      />
    </PageWrapper>
  );
};

export default TaskPage;