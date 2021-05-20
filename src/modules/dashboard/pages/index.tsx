import React, { useEffect } from 'react';
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
import { fetchDashboardData } from '../reducer/dashboardReducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { DashboardData } from '../models/types';
import { AlbumPreviewProps } from '../components/AlbumPreview/types';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';

type dashboardCardType = {
  data: DashboardData;
};

type OverviewAlbumType = {
  data: AlbumPreviewProps[];
};

const DashboardCard: React.FC<dashboardCardType> = (props) => {
  const { data } = props;
  return (
    <CardWrapper>
      <Row justify="space-around" align="middle">
        <Col md={5}>
          <NumberCard
            cardName={'Photos'}
            largeNumber={data.totalPhotos}
            todayNumber={data.todayPhotos}
          />
        </Col>
        <Col md={5}>
          <NumberCard
            cardName={'Videos'}
            largeNumber={data.totalVideos}
            todayNumber={data.todayVideos}
          />
        </Col>
        <Col md={5}>
          <ProgressCard
            cardName={'Task'}
            progress={data.progressPhoto}
            doneNumber={data.finishRunningPhotos}
            totalNumber={data.totalRunningPhotos}
          />
        </Col>
        <Col md={5}>
          <ModelCard
            cardName={'Model'}
            model={data.model}
            largeNumber={data.processWithModelPhoto}
          />
        </Col>
      </Row>
    </CardWrapper>
  );
};

const OverviewAlbum: React.FC<OverviewAlbumType> = (props) => {
  const { data } = props;
  return (
    <Row justify="start" align="top">
      {data.map((album, index) => (
        <Col md={5} key={index}>
          <AlbumPreview
            src={album.src}
            albumName={album.albumName}
            albumLength={album.albumLength}
            label={album.label}
            link={album.link}
          />
        </Col>
      ))}
    </Row>
  );
};

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboardData());
  }, []);
  const DashboardDataStore = useSelector(
    (state: StoresState) => state.dashboard.data.dashboardData,
  );
  const AlbumPreviewData = useSelector(
    (state: StoresState) => state.dashboard.data.albumPreviewData,
  );

  return (
    <LayoutWithSearch>
      <DashboardWrapper>
        <ContentWrapper>
          <DashboardHeader>Dashboard</DashboardHeader>
          <DashboardCard data={DashboardDataStore} />

          <AlbumWrapper>
            <h3>Lastest Album</h3>
            <OverviewAlbum data={AlbumPreviewData} />
          </AlbumWrapper>
        </ContentWrapper>
      </DashboardWrapper>
    </LayoutWithSearch>
  );
};

export default DashboardPage;
