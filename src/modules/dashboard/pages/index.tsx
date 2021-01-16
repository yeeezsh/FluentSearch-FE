import React from 'react';
import { Row, Col } from 'antd';

export const DashboardPage: React.FC = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <Row justify="center">
        <Col>card1</Col>
        <Col>card2</Col>
        <Col>card3</Col>
        <Col>card4</Col>
      </Row>

      <h3>Overview Album</h3>
      <Row justify="center">
        <Col>album1</Col>
        <Col>album2</Col>
        <Col>album3</Col>
      </Row>
    </div>
  );
};
