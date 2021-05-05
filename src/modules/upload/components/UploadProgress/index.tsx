import React from 'react';
import UploadItem from './UploadItem';
import { useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { Wrapper } from './styled';

const UploadProgress: React.FC = () => {
  const group = useSelector((state: StoresState) => state.upload.present.group);
  const total = useSelector((state: StoresState) => state.upload.present.total);

  return total > 0 ? (
    <Wrapper>
      <h4>Uploading File</h4>
      {total > 0
        ? Object.values(group).map((file) => {
            return (
              <UploadItem
                key={Math.random()}
                file={{ file: file, progress: file.progress }}
              />
            );
          })
        : null}
    </Wrapper>
  ) : null;
};

export default UploadProgress;
