import React, { useEffect, useState } from 'react';
import { Col, Layout, Row } from 'antd';
import Button from 'Components/Button';
import { BottomBar, UploadWrapper, Image, LabelUpload } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import UploadProgress from '../components/UploadProgress';
import { StoresState } from 'Stores/index';
import { getUploadProgress, uploadFileData } from '../reducer/uploadReducer/actions';
import { FileUpload } from '../model/types';
import { v4 as uuidv4 } from 'uuid';
import { uploadActions } from '../reducer/uploadReducer';
import SelectFileButton from '../components/SelectFileButton';
import { InputLine } from 'Styles/global';
import { WrapperImage } from '../../photos/pages/styled';

const UploadPage: React.FC = () => {
  const dispatch = useDispatch();
  const { Content } = Layout;
  const [files, setFiles] = useState<File[]>([]);
  const [groupGenerated, setGroupGenerated] = useState<string>('');
  const [albumName, setAlbumName] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);

  const pendingQueue = useSelector((state: StoresState) => state.upload.pendingQueue);
  const fulfillQueue = useSelector((state: StoresState) => state.upload.fulfillQueue);

  useEffect(() => {
    getUploadProgress();
  }, [pendingQueue, fulfillQueue]);

  const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const rawFiles = e.target.files;
    const groupName = uuidv4();
    setGroupGenerated(groupName);

    if (rawFiles) {
      let type: FileUpload['type'] = 'single';
      if (rawFiles.length > 0) type = 'multiple';

      for (const file of rawFiles) {
        const image = URL.createObjectURL(file);
        const newFile = {
          _id: uuidv4() as string,
          progress: 0,
          originFilename: file.name,
          createAt: new Date().toString(),
          type: type,
          group: groupName,
          state: 'waiting',
        } as FileUpload;
        dispatch(uploadActions.setPendingQueue(newFile));
        setFiles((prevState) => [...prevState, file]);
        setImages((prevState) => [...prevState, image]);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumName(e.target.value);
  };

  const group = useSelector((state: StoresState) => state.upload.present.group);

  useEffect(() => {
    uploadFileData(groupGenerated, files);
  }, [groupGenerated]);

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
            <Col>
              <input
                type="file"
                name="file"
                id="upload"
                multiple
                hidden
                onChange={handleFileOnChange}
              />
              <LabelUpload htmlFor="upload">+ Select Photos</LabelUpload>
            </Col>
          </Row>
          <hr />

          <Row justify="center" align="middle">
            {files.length > 0 ? (
              <Col>
                <WrapperImage>
                  {images.map((el, index) => (
                    <Image src={el} key={index} />
                  ))}
                </WrapperImage>
              </Col>
            ) : (
              <Col style={{ marginTop: '15%' }}>
                <SelectFileButton onChange={handleFileOnChange} />
              </Col>
            )}
          </Row>
        </Content>
      </UploadWrapper>
      {files.length > 0 ? <UploadProgress group={group} total={files.length} /> : null}
      {/* <UploadProgress /> */}
    </Layout>
  );
};

export default UploadPage;
