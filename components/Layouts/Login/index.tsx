import { Col, Row } from 'antd';
import { Container, FormContainer } from 'Components/Layouts/Login/styled';
import Image from 'next/image';
import React from 'react';

const LoginCanvas: React.FC = () => (
  <Col xs={0} sm={0} md={0} lg={12}>
    <Image
      src={'assets/images/login-1.png'}
      layout="responsive"
      width={900}
      height={1500}
    />
  </Col>
);

const LoginLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <Container>
      <Row justify="center">
        <LoginCanvas />
        <Col xs={20} sm={20} md={20} lg={12}>
          <FormContainer>{children}</FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginLayout;
