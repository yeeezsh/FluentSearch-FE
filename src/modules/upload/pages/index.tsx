import React, { useState } from 'react';
import { Col, Input, Layout, Row } from 'antd';
import Button from 'Components/Button';
import { BottomBar, UploadWrapper } from './styled';
import { InputLine } from 'Styles/global';
import UploadButton from '../components/UploadButton';

const UploadPage: React.FC = () => {
  const { Content } = Layout;
  const [albumName, setAlbumName] = useState<string>('');

  const handleAttachFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('files upload', e.target.files);
  };

  return (
    <Layout>
      <UploadWrapper>
        <Content>
          <h2 style={{ marginBottom: '2%' }}>Upload Photos</h2>
          <hr />
          <Row justify="center" align="middle">
            <Col style={{ marginTop: '15%' }}>
              <UploadButton onChange={handleAttachFile} />
            </Col>
          </Row>
        </Content>
      </UploadWrapper>
      <BottomBar>
        <Button style={{ backgroundColor: '#5A36CC' }}>Upload Photo </Button>
      </BottomBar>
    </Layout>
  );
};

export default UploadPage;
