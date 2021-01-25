import React, { InputHTMLAttributes, useState } from 'react';
import { Col, Input, Layout, Row } from 'antd';
import Button from 'Components/Button';
import { BottomBar, UploadWrapper } from './styled';

const UploadPage: React.FC = () => {
  const { Content, Footer } = Layout;
  const [albumName, setAlbumName] = useState<string>('');

  const onChange = (e: any) => {
    console.log(e.target.value);
    setAlbumName(e.target.value);
  };

  return (
    <Layout>
      <UploadWrapper>
        <Content>
          <Row justify="space-between" style={{ marginBottom: '1.5rem' }}>
            <Col md={8}>
              <Input
                size="large"
                placeholder="Album name"
                bordered={false}
                style={{ borderBottom: '1px solid lightgrey' }}
                onChange={onChange}
                value={albumName}
              />
            </Col>
            <Col md={4}>sort</Col>
          </Row>

          <hr />
          <Row justify="center" align="middle">
            <Col style={{ marginTop: '20%' }}>
              <div>
                <input
                  type="file"
                  onClick={() => {
                    console.log('click');
                  }}
                />
              </div>
            </Col>
          </Row>
        </Content>
      </UploadWrapper>
      <BottomBar>
        <Button>Next &gt;</Button>
      </BottomBar>
    </Layout>
  );
};

export default UploadPage;
