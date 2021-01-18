import React from 'react';
import { Row, Col, Progress } from 'antd';
import {
  DashboardWrapper,
  ContentWrapper,
  DashboardCard,
  SmallBodyText,
  CardWrapper,
  Label,
} from './styled';
import AlbumPreview from 'Modules/dashboard/components/AlbumPreview/index';

const DashboardPage: React.FC = () => {
  const LabelList: Array<string> = ['label1', 'label2', 'label3'];

  return (
    <DashboardWrapper>
      <ContentWrapper>
        <h3 style={{ color: 'White' }}>Dashboard</h3>
        <CardWrapper>
          <Row justify="space-around" align="middle">
            <Col md={4}>
              <DashboardCard>
                <h5>Photos</h5>
                <br />
                <h3>123.k</h3>
                <SmallBodyText>today upload</SmallBodyText>
                <p style={{ fontWeight: 'bold', color: '#5A36CC' }}>+123.k</p>
              </DashboardCard>
            </Col>
            <Col md={4}>
              <DashboardCard>
                <h5>Videos</h5>
                <br />
                <h3>123.k</h3>
                <SmallBodyText>today upload</SmallBodyText>
                <p style={{ fontWeight: 'bold', color: '#5A36CC' }}>+123.k</p>
              </DashboardCard>
            </Col>
            <Col md={4}>
              <DashboardCard>
                <h5>Task</h5>
                <div style={{ textAlign: 'center' }}>
                  <Progress
                    type="circle"
                    percent={75}
                    strokeWidth={8}
                    strokeColor={{ '0%': '#5a36cc', '100%': '#5a36cc' }}
                  />
                  <SmallBodyText style={{ marginTop: '10%' }}>
                    100 of 1000 photos
                  </SmallBodyText>
                </div>
              </DashboardCard>
            </Col>
            <Col md={4}>
              <DashboardCard>
                <h5>Model</h5>
                <br />
                <Label color="purple" style={{ marginTop: '10%' }}>
                  ResNet
                </Label>
                <h3 style={{ marginTop: '0%', marginBottom: '-3%' }}>800</h3>
                <p>photos</p>
              </DashboardCard>
            </Col>
          </Row>
        </CardWrapper>

        <div style={{ marginTop: '3%' }}>
          <h3>Overview Album</h3>
          <Row justify="space-around" align="middle">
            <Col md={5}>
              <AlbumPreview
                src="assets/images/test.jpg"
                albumName="album name"
                albumLength={1}
                label={LabelList}
              />
            </Col>
            <Col md={5}>
              <AlbumPreview
                src="assets/images/test.jpg"
                albumName="album name"
                albumLength={1}
                label={LabelList}
              />
            </Col>
            <Col md={5}>
              <AlbumPreview
                src="assets/images/test.jpg"
                albumName="album name"
                albumLength={1}
                label={LabelList}
              />
            </Col>
            <Col md={5}>
              <AlbumPreview
                src="assets/images/test.jpg"
                albumName="album name"
                albumLength={1}
                label={LabelList}
              />
            </Col>
          </Row>
        </div>
      </ContentWrapper>
    </DashboardWrapper>
  );
};

export default DashboardPage;
