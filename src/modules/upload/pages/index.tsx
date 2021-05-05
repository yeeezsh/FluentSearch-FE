import React, { useEffect } from 'react';
import { Col, Layout, Row } from 'antd';
import Button from 'Components/Button';
import { BottomBar, UploadWrapper } from './styled';
import UploadButton from '../components/UploadButton';
import { useDispatch, useSelector } from 'react-redux';
import UploadProgress from '../components/UploadProgress';
import { StoresState } from 'Stores/index';
import { getUploadProgress } from '../reducer/uploadReducer/actions';
import { FileUpload } from '../model/types';
import { uuid } from 'uuidv4';

const UploadPage: React.FC = () => {
  const dispatch = useDispatch();
  const { Content } = Layout;
  //TODO: add setAlbumName, InputLine Component

  const pendingQueue = useSelector((state: StoresState) => state.upload.pendingQueue);
  const fulfillQueue = useSelector((state: StoresState) => state.upload.fulfillQueue);

  useEffect(() => {
    getUploadProgress();
  }, [pendingQueue, fulfillQueue]);

  const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawFiles = e.target.files;

    if (rawFiles) {
      const filesToUpload: FileUpload[] = [];
      const groupGenerated: string = uuid();

      let type: FileUpload['type'] = 'single';
      if (rawFiles.length > 0) type = 'multiple';

      for (const file of rawFiles) {
        const formData = new FormData();
        formData.append('file', file);

        const newFile = {
          _id: uuid() as string,
          file: formData,
          progress: 0,
          originFilename: file.name,
          createAt: new Date(),
          type: type,
          group: groupGenerated,
          state: 'waiting',
        } as FileUpload;

        filesToUpload.push(newFile);
      }

      //initUpload(filesToUpload);
    }
  };

  // const initUpload = (files: FileUpload[]) => {
  //   files.forEach((el) => dispatch(uploadActions.setFulfillQueue(el)));
  //   const groupIdGenerated = Math.random().toLocaleString();
  //   uploadFileData(groupIdGenerated);
  // };

  return (
    <Layout>
      <UploadWrapper>
        <Content>
          <h2 style={{ marginBottom: '2%' }}>Upload Photos</h2>
          <hr />
          <Row justify="center" align="middle">
            <Col style={{ marginTop: '15%' }}>
              <UploadButton onChange={handleFileOnChange} />
            </Col>
          </Row>
        </Content>
      </UploadWrapper>
      <UploadProgress />
      <BottomBar>
        <Button style={{ backgroundColor: '#5A36CC' }}>Upload Photo </Button>
      </BottomBar>
    </Layout>
  );
};

export default UploadPage;
function uuidv4() {
  throw new Error('Function not implemented.');
}
