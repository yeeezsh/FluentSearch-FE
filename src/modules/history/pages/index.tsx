import React, { useEffect } from 'react';
import { columns } from 'Modules/history/models/constant';
import { PurpleTable, PageWrapper } from 'Styles/global';
import { useSelector, useDispatch } from 'react-redux';
import { StoresState } from 'Stores/index';

import { fetchHistoryData } from '../reducer/historyReducer/actions';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
const HistoryPages: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHistoryData());
  }, []);
  const historyData = useSelector((state: StoresState) => state.history);
  return (
    <LayoutWithSearch title="History">
      <PageWrapper>
        <PurpleTable
          dataSource={historyData.data}
          columns={columns}
          style={{ marginTop: '30px' }}
          pagination={{ position: ['bottomCenter'] }}
        />
      </PageWrapper>
    </LayoutWithSearch>
  );
};

export default HistoryPages;
