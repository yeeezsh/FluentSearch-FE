import React from 'react';
import { Row, Col } from 'antd';
import { P } from 'Styles/global';

export const BreakLineWithCaption: React.FC = (props) => {
  return (
    <Row justify="center">
      <Col span={10}>
        <hr />
      </Col>
      <Col span={4}>
        <P>{props.children}</P>
      </Col>
      <Col span={10}>
        <hr />
      </Col>
    </Row>
  );
};
