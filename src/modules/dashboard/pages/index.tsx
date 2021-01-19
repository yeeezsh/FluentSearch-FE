import React from 'react';
import { Row, Col, Progress } from 'antd';
import { DashboardWrapper, ContentWrapper, CardWrapper, Label } from './styled';
import AlbumPreview from 'Modules/dashboard/components/AlbumPreview/index';
import NumberCard from '../components/Card/numberCard';
import ProgressCard from '../components/Card/progressCard';
import ModelCard from '../components/Card/modelCard';

const DashboardPage: React.FC = () => {
  const LabelList: Array<string> = ['label1', 'label2', 'label3'];

  return (
    <DashboardWrapper>
      <ContentWrapper>
        <h3 style={{ color: 'White' }}>Dashboard</h3>
        <CardWrapper>
          <Row justify="space-around" align="middle">
            <Col md={4}>
              <NumberCard cardName={'Photos'} largeNumber={123000} todayNumber={123000} />
            </Col>
            <Col md={4}>
              <NumberCard cardName={'Videos'} largeNumber={123000} todayNumber={123000} />
            </Col>
            <Col md={4}>
              <ProgressCard
                cardName={'Task'}
                progress={75}
                doneNumber={100}
                totalNumber={1000}
              />
            </Col>
            <Col md={4}>
              <ModelCard cardName={'Model'} model={'resNet'} largeNumber={800} />
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
