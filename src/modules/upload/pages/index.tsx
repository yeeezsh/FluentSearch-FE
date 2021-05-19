import React, { useEffect, useState } from 'react';
import { Col, Layout, Row } from 'antd';
import Button from 'Components/Button';
import { BottomBar, UploadWrapper } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import UploadProgress from '../components/UploadProgress';
import { StoresState } from 'Stores/index';
import { getUploadProgress, uploadFileData } from '../reducer/uploadReducer/actions';
import { FileUpload } from '../model/types';
import { v4 as uuidv4 } from 'uuid';
import { uploadActions } from '../reducer/uploadReducer';
import SelectFileButton from '../components/SelectFileButton';
import { InputLine } from 'Styles/global';

const UploadPage: React.FC = () => {
  const dispatch = useDispatch();
  const { Content } = Layout;
  const [files, setFiles] = useState<File[]>([]);
  const [albumName, setAlbumName] = useState<string>('');

  const pendingQueue = useSelector((state: StoresState) => state.upload.pendingQueue);
  const fulfillQueue = useSelector((state: StoresState) => state.upload.fulfillQueue);

  useEffect(() => {
    getUploadProgress();
  }, [pendingQueue, fulfillQueue]);

  const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawFiles = e.target.files;

    const filesToUpload: FileUpload[] = [];
    const groupGenerated: string = uuidv4();

    if (rawFiles) {
      let type: FileUpload['type'] = 'single';
      if (rawFiles.length > 0) type = 'multiple';

      for (const file of rawFiles) {
        setFiles((prevFiles) => ({ ...prevFiles, file }));
        const newFile = {
          _id: uuidv4() as string,
          progress: 0,
          originFilename: file.name,
          createAt: new Date().toString(),
          type: type,
          group: groupGenerated,
          state: 'waiting',
        } as FileUpload;
        filesToUpload.push(newFile);
      }
      initUpload(groupGenerated, filesToUpload);
    }
  };

  const initUpload = (group: string, metaDataFiles: FileUpload[]) => {
    metaDataFiles.forEach((el) => dispatch(uploadActions.setPendingQueue(el)));
    uploadFileData(group, files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumName(e.target.value);
  };

  return (
    <Layout>
      <UploadWrapper>
        <Button>{'<'}</Button>
        <Content>
          <h2 style={{ marginBottom: '2%' }}>Upload Photos</h2>
          <Row>
            <Col span={10} style={{ marginBottom: '1em' }}>
              <InputLine
                placeholder="Album Name"
                value={albumName}
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <hr />

          <Row justify="center" align="middle">
            <Col style={{ marginTop: '15%' }}>
              <SelectFileButton onChange={handleFileOnChange} />
            </Col>
          </Row>
        </Content>
      </UploadWrapper>
      <UploadProgress />
    </Layout>
  );
};

export default UploadPage;
