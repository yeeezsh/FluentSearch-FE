import React from 'react';
import { Row, Col } from 'antd';
import {
  DashboardWrapper,
  ContentWrapper,
  CardWrapper,
  AlbumWrapper,
  DashboardHeader,
} from './styled';
import AlbumPreview from 'Modules/dashboard/components/AlbumPreview/index';
import NumberCard from 'Modules/dashboard/components/DashboardCard/NumberCard/index';
import ProgressCard from 'Modules/dashboard/components/DashboardCard/ProgressCard/index';
import ModelCard from 'Modules/dashboard/components/DashboardCard/ModelCard/index';

const LabelList: Array<string> = ['label1', 'label2', 'label3'];

const DashboardCard: React.FC = () => {
  return (
    <CardWrapper>
      <Row justify="space-around" align="middle">
        <Col md={5}>
          <NumberCard cardName={'Photos'} largeNumber={123000} todayNumber={123000} />
        </Col>
        <Col md={5}>
          <NumberCard cardName={'Videos'} largeNumber={123000} todayNumber={123000} />
        </Col>
        <Col md={5}>
          <ProgressCard
            cardName={'Task'}
            progress={75}
            doneNumber={100}
            totalNumber={1000}
          />
        </Col>
        <Col md={5}>
          <ModelCard cardName={'Model'} model={'resNet'} largeNumber={800} />
        </Col>
      </Row>
    </CardWrapper>
  );
};

const OverviewAlbum: React.FC = () => {
  return (
    <Row justify="space-around" align="middle">
      <Col md={5}>
        <AlbumPreview
          src="https://i.pinimg.com/564x/86/1c/a6/861ca60c3a2813c8e3250b9af138ada0.jpg"
          albumName="album name"
          albumLength={1}
          label={LabelList}
        />
      </Col>
      <Col md={5}>
        <AlbumPreview
          src="https://i.pinimg.com/564x/86/1c/a6/861ca60c3a2813c8e3250b9af138ada0.jpg"
          albumName="album name"
          albumLength={1}
          label={LabelList}
        />
      </Col>
      <Col md={5}>
        <AlbumPreview
          src="https://i.pinimg.com/564x/86/1c/a6/861ca60c3a2813c8e3250b9af138ada0.jpg"
          albumName="album name"
          albumLength={1}
          label={LabelList}
        />
      </Col>
      <Col md={5}>
        <AlbumPreview
          src="https://i.pinimg.com/564x/86/1c/a6/861ca60c3a2813c8e3250b9af138ada0.jpg"
          albumName="album name"
          albumLength={1}
          label={LabelList}
        />
      </Col>
    </Row>
  );
};

const DashboardPage: React.FC = () => {
  return (
    <DashboardWrapper>
      <ContentWrapper>
        <DashboardHeader>Dashboard</DashboardHeader>
        <DashboardCard />

        <AlbumWrapper>
          {/*TODO - Lastest Album*/}
          <h3>Lastest Photo</h3>
          <OverviewAlbum />
        </AlbumWrapper>
      </ContentWrapper>
    </DashboardWrapper>
  );
};

export default DashboardPage;
