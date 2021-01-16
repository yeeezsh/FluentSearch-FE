import React from 'react';
import { Row, Col, Card } from 'antd';
import { DashboardWrapper, ContentWrapper, DashboardCard } from './styled';

const DashboardPage: React.FC = () => {
  return (
    <DashboardWrapper>
      <ContentWrapper>
        <h3 style={{ color: 'White' }}>Dashboard</h3>
        <Row justify="center">
          <Col md={3}>
            <DashboardCard>
              <h5>Photos</h5>
              <br />
              <h3>123.k</h3>
              <p>today upload</p>
              <p>+123.k</p>
            </DashboardCard>
          </Col>
          <Col md={3}>
            <DashboardCard>card1</DashboardCard>
          </Col>
          <Col md={3}>
            <DashboardCard>card1</DashboardCard>
          </Col>
          <Col md={3}>
            <DashboardCard>card1</DashboardCard>
          </Col>
        </Row>

        <h3>Overview Album</h3>
        <Row justify="center">
          <Col>album1</Col>
          <Col>album2</Col>
          <Col>album3</Col>
        </Row>
      </ContentWrapper>
    </DashboardWrapper>
  );
};

export default DashboardPage;
