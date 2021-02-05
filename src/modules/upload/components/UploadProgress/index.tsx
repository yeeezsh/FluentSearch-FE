import React, { useEffect } from 'react';
import { size } from 'lodash';
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
    // TODO: if empty not try to upload
    const fileToUpload = Object.values(fileProgress).filter(
      (file) => file.progress === 0,
    );
    dispatch(uploadPhotoData(fileToUpload));
  }, [uploadedFileAmount]);

  return uploadedFileAmount > 0 ? (
    <Wrapper>
      <h4>Uploading File</h4>
      {/* //TODO: wtf */}
      {size(fileProgress) > 0
        ? Object.values(fileProgress).map((file) => {
            return (
              <UploadItem
                key={file._id}
                file={{ file: file.file, progress: file.progress }}
              />
            );
          })
        : null}
    </Wrapper>
  ) : null;
};

export default UploadProgress;
