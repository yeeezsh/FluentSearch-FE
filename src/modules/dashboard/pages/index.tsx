import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { Dashboard, FileInsight } from '../models/types';
import { AlbumPreviewProps } from '../components/AlbumPreview/types';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import {
  InsightModelEnum,
  useGetDashboardDataQuery,
} from '../../../common/generated/generated-types';
import { initState } from '../constants/init';

type dashboardCardType = {
  data: Dashboard;
};

type OverviewAlbumType = {
  data: AlbumPreviewProps[];
};

const DashboardCard: React.FC<dashboardCardType> = (props) => {
  const { data } = props;

  return (
    <CardWrapper>
      <Row justify="start">
        <Col md={5} style={{ marginRight: '5%' }}>
          <NumberCard
            cardName={'Photos'}
            largeNumber={data.FileDashboardData?.photo.total}
            todayNumber={data.FileDashboardData?.photo.today}
          />
        </Col>
        <Col md={5}>
          <NumberCard
            cardName={'Videos'}
            largeNumber={data.FileDashboardData?.video.total}
            todayNumber={data.FileDashboardData?.video.today}
          />
        </Col>

        {/* TODO: Not implemented progress card and model card 
        <Col md={5}>
          <ProgressCard cardName={'Task'} progress={0} doneNumber={0} totalNumber={0} />
        </Col>
        <Col md={5}>
          <ModelCard cardName={'Model'} model={model} largeNumber={0} />
        </Col> */}
      </Row>
    </CardWrapper>
  );
};

const OverviewAlbum: React.FC<OverviewAlbumType> = (props) => {
  const { data } = props;
  return (
    <Row justify="space-around" align="top">
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
  const owner = useSelector((store: StoresState) => store.user.user.id);
  const { data, loading, error } = useGetDashboardDataQuery({
    variables: {
      owner: owner,
    },
  });

  console.log(data);

  const [dashboardData, setDashboardData] = useState<Dashboard>(initState);

  const queryDataFileDashboard = {
    photo: {
      today: data?.GetFileDashboard.photo.today || 0,
      total: data?.GetFileDashboard.photo.total || 0,
    },
    video: {
      today: data?.GetFileDashboard.video.today || 0,
      total: data?.GetFileDashboard.video.total || 0,
    },
  };

  const queryDataFileInsightDashboard: FileInsight[] =
    data?.GetRecentFileInsightDashboard.map((el) => ({
      fileMeta: {
        _id: el.fileMeta._id,
        type: el.fileMeta.type,
        uri: el.fileMeta.uri,
        uri_thumbnail: el.fileMeta.uri_thumbnail,
      },
      insights:
        el.insights?.map((insight) => ({
          keyword: insight.keyword,
          model: insight.model,
        })) || [],
    })) || [];

  useEffect(() => {
    setDashboardData({
      FileDashboardData: queryDataFileDashboard,
      FileInsightDashboardData: queryDataFileInsightDashboard,
    });
    //dispatch(fetchDashboardData());
  }, [loading]);
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
          <DashboardCard data={dashboardData} />

          <AlbumWrapper>
            {/*TODO: Lastest Album*/}
            <h3>Lastest Photo</h3>
            <OverviewAlbum data={AlbumPreviewData} />
          </AlbumWrapper>
        </ContentWrapper>
      </DashboardWrapper>
    </LayoutWithSearch>
  );
};

export default DashboardPage;
