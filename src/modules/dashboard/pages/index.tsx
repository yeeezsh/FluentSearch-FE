import React from 'react';
import { Row, Col, Progress } from 'antd';
import { DashboardWrapper, ContentWrapper, DashboardCard } from './styled';
import { Label } from 'Styles/global';

const DashboardPage: React.FC = () => {
  return (
    <DashboardWrapper>
      <ContentWrapper>
        <h3 style={{ color: 'White' }}>Dashboard</h3>
        <Row justify="space-around" align="middle">
          <Col md={4}>
            <DashboardCard>
              <h5>Photos</h5>
              <br />
              <h3>123.k</h3>
              <p>today upload</p>
              <p>+123.k</p>
            </DashboardCard>
          </Col>
          <Col md={4}>
            <DashboardCard>
              <h5>Videos</h5>
              <br />
              <h3>123.k</h3>
              <p>today upload</p>
              <p>+123.k</p>
            </DashboardCard>
          </Col>
          <Col md={4}>
            <DashboardCard>
              <h5>Task</h5>
              <br />
              <Progress type="dashboard" percent={75} gapDegree={30} />
              <p>100 of 1000 photos</p>
            </DashboardCard>
          </Col>
          <Col md={4}>
            <DashboardCard>
              <h5>Model</h5>
              <br />
              <Label color="purple">ResNet</Label>
              <h3>800</h3>
              <p>photos</p>
            </DashboardCard>
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
