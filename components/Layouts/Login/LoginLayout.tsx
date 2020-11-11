import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';

const ContainerLeft = styled.div`
  left: 0;
  background: #4425a7;
  height: 100vh;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;

  img {
    height: 100%;
    position: relative;
  }
`;

const ContainerRight = styled.div`
  right: 0;
  background: #fff;
  height: 100vh;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 21%;
`;

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
