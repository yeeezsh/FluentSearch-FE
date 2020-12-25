import { Col, Row } from 'antd';
import React from 'react';
import { ContainerLeft, ContainerRight } from './LoginLayout.styled';

const LoginLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div>
      <ContainerLeft>
        <img
          src="https://blog.bannersnack.com/wp-content/uploads/2019/02/nuria.png"
          alt="work from home"
        />
      </ContainerLeft>
      <ContainerRight>
        <Row justify="center">
          <Col span={14}>{children}</Col>
        </Row>
      </ContainerRight>
    </div>
  );
};

export default LoginLayout;
