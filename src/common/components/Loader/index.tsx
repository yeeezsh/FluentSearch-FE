import React from 'react';
import { Loading } from './styled';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = (): JSX.Element => {
  const antIcon = <LoadingOutlined spin />;

  return (
    <Loading>
      <Spin indicator={antIcon} />
    </Loading>
  );
};
