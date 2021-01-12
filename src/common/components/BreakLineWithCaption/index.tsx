import React from 'react';
import { Row, Col } from 'antd';
import { P } from 'Styles/global';

export const BreakLineWithCaption: React.FC = (props) => {
  const isInstanceOfString = typeof props.children === 'string';

  return (
    <Row justify="center">
      <Col span={10}>
        <hr />
      </Col>
      <Col span={4}>{isInstanceOfString ? <P>{props.children}</P> : props.children}</Col>
      <Col span={10}>
        <hr />
      </Col>
    </Row>
  );
};
