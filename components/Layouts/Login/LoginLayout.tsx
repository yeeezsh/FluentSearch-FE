import { Col, Row } from 'antd';
import { Container, FormContainer } from 'Components/Layouts/Login/LoginLayout.styled';
import Image from 'next/image';
import React from 'react';

const LoginLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <Container>
      <Row justify="center">
        <Col xs={0} sm={0} md={12}>
          <Image src={'/login.jpg'} unsized />
        </Col>
        <Col xs={20} sm={20} md={12} xl={12}>
          <FormContainer>{children}</FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginLayout;
