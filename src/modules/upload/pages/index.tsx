import React, { useState } from 'react';
import { Col, Input, Layout, Row } from 'antd';
import Button from 'Components/Button';
import { BottomBar, UploadWrapper } from './styled';
import { InputLine } from 'Styles/global';
import UploadButton from '../components/UploadButton';

const UploadPage: React.FC = () => {
  const { Content } = Layout;
  const [albumName, setAlbumName] = useState<string>('');

  return (
    <Layout>
      <UploadWrapper>
        <Content>
          <Row justify="end" style={{ marginBottom: '1.5rem' }}>
            <Col flex={4}>Sort</Col>
            <Col flex={4}>
              <button>+ Photos</button>
            </Col>
          </Row>

          <hr />
          <Row justify="center" align="middle">
            <Col style={{ marginTop: '20%' }}>
              <UploadButton />
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
