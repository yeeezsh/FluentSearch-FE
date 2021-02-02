import React, { useEffect } from 'react';
import { columns } from 'Modules/history/models/constant';
import { PurpleTable, PageWrapper } from 'Styles/global';
import { useSelector, useDispatch } from 'react-redux';
import { StoresState } from 'Stores/index';

import { fetchHistoryData } from '../reducer/historyReducer/actions';
const HistoryPages: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHistoryData());
  }, []);
  const historyData = useSelector((state: StoresState) => state.history);
  return (
    <PageWrapper>
      <h3>History</h3>
      <hr />
      <PurpleTable
        dataSource={historyData.data.data}
        columns={columns}
        style={{ marginTop: '30px' }}
        pagination={{ position: ['bottomCenter'] }}
      />
    </PageWrapper>
  );
};

export default HistoryPages;
