import React from 'react';
import UploadItem from './UploadItem';
import { Wrapper } from './styled';
import { v4 as uuid } from 'uuid';
import { UploadProgressPropsType } from './types';
const UploadProgress: React.FC<UploadProgressPropsType> = (props) => {
  const { total, group } = props;
  console.log(total, group);
  return total > 0 ? (
    <Wrapper>
      <h5>Uploading File</h5>
      {total > 0
        ? Object.values(group).map((file) => {
            return <UploadItem key={uuid()} file={{ file: file }} />;
          })
        : null}
    </Wrapper>
  ) : null;
};

export default UploadProgress;
