import React, { useEffect } from 'react';
import { size, toArray } from 'lodash';
import UploadItem from './UploadItem';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPhotoData } from 'Modules/upload/reducer/uploadReducer/actions';
import { StoresState } from 'Stores/index';
import { Wrapper } from './styled';

const UploadProgress: React.FC = () => {
  const dispatch = useDispatch();
  const fileProgress = useSelector(
    (state: StoresState) => state.upload.data.fileProgress,
  );
  const uploadedFileAmount = size(fileProgress);

  useEffect(() => {
    const fileToUpload = toArray(fileProgress).filter((file) => file.progress === 0);
    console.log(fileToUpload);
    dispatch(uploadPhotoData(fileToUpload));
  }, [uploadedFileAmount]);

  return uploadedFileAmount > 0 ? (
    <Wrapper>
      <h4>Uploading File</h4>
      {size(fileProgress)
        ? toArray(fileProgress).map((file) => {
            <UploadItem key={file.id} file={file} />;
          })
        : null}
    </Wrapper>
  ) : null;
};

export default UploadProgress;
