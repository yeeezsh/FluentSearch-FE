import React from 'react';
import { WrapperItem, LeftSide, Percentage, FileLabel } from './styled';
import { UploadItemProps } from './types';
import { LoadingOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const UploadItem: React.FC<UploadItemProps> = (props) => {
  const { file } = props.file;
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return file ? (
    <WrapperItem>
      <LeftSide>
        <FileLabel>{file.label}</FileLabel>
      </LeftSide>
      <Percentage>
        {file.progress} / {file.total}
        {file.progress === file.total ? (
          <CheckCircleOutlined
            style={{ marginLeft: '1rem', color: 'var(--light-success-color)' }}
          />
        ) : (
          <Spin indicator={antIcon} />
        )}
      </Percentage>
    </WrapperItem>
  ) : null;
};

export default UploadItem;
