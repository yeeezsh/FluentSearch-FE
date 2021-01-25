import React from 'react';
import { Col, Input, Layout, Row } from 'antd';
import Button from 'Components/Button';
import { UploadWrapper } from './styled';

const UploadPage: React.FC = () => {
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <UploadWrapper>
        <Content>
          <Row justify="space-between">
            <Col md={8}>
              <Input
                size="large"
                placeholder="Album name"
                bordered={false}
                style={{ borderBottom: '1px solid grey' }}
              />
            </Col>
            <Col md={8}>sort</Col>
          </Row>

          <hr />
          <p>upload photo</p>
        </Content>
      </UploadWrapper>
      <Footer
        style={{
          backgroundColor: 'red',
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
          position: 'fixed',
          bottom: '0',
          width: '100%',
        }}>
        <Button>Next &gt;</Button>
      </Footer>
    </Layout>
  );
};

export default UploadPage;
