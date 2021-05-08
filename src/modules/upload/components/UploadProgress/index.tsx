import React from 'react';
import UploadItem from './UploadItem';
import { useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { Wrapper } from './styled';
import { v4 as uuid } from 'uuid';
const UploadProgress: React.FC = () => {
  const group = useSelector((state: StoresState) => state.upload.present.group);
  const total = useSelector((state: StoresState) => state.upload.present.total);

  return total > 0 ? (
    <Wrapper>
      <h4>Uploading File</h4>
      {total > 0
        ? Object.values(group).map((file) => {
            return <UploadItem key={uuid()} file={{ file: file }} />;
          })
        : null}
    </Wrapper>
  ) : null;
};

export default UploadProgress;
