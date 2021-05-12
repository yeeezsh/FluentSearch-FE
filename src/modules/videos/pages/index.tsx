import { Row, Col, Card } from 'antd';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import Avatar from '../components/Avatar';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import { annotation } from '../mocks/annotation';
import { fetchInsightData } from '../reducers/insightReducer/actions';
import { fetchVideoData } from '../reducers/videoReducer/actions';
import { convertToDayOfWeek } from '../utils/convertToDayOfWeek';
import { DetailHeader, Header, VideoDetailCard } from './styled';
import filesize from 'filesize';

const ViewVideoPage: React.FC = () => {
  const dispatch = useDispatch();
  const date = useSelector((state: StoresState) => state.video.present.metaData.date);
  const originalFileName = useSelector(
    (state: StoresState) => state.video.present.metaData.originalFileName,
  );
  const format = useSelector((state: StoresState) => state.video.present.metaData.format);
  const size = useSelector((state: StoresState) => state.video.present.metaData.size);
  const width = useSelector((state: StoresState) => state.video.present.metaData.width);
  const height = useSelector((state: StoresState) => state.video.present.metaData.height);
  const place = useSelector((state: StoresState) => state.video.present.metaData.place);

  const incidents = useSelector((state: StoresState) => state.insight.present.label);
  const personIncidents = useSelector(
    (state: StoresState) => state.insight.present.person,
  );

  const totalIncidents = incidents.length + personIncidents.length;

  useEffect(() => {
    dispatch(fetchVideoData());
    dispatch(fetchInsightData());
  }, []);

  const handleSelectAvatar = (id: string) => {
    console.log('selected id' + id);
  };

  const PeopleCard = () => {
    return (
      <VideoDetailCard title={`${totalIncidents} People`}>
        {totalIncidents > 0
          ? annotation.map((el) => (
              <Avatar
                src={el.src}
                key={el.id}
                id={el.id}
                handleOnClick={handleSelectAvatar}
                selected={el.selected}
              />
            ))
          : 'no people'}
      </VideoDetailCard>
    );
  };

  const LabelCard = () => {
    return <Card title={`${totalIncidents} Labels`}></Card>;
  };

  const DetailCard = () => (
    <Card title="Details">
      <Row>
        <Col span={6}>
          <DetailHeader>Date</DetailHeader>
        </Col>
        <Col span={18}>
          {dayjs(date).format('MMM DD, YYYY')}
          <br />
          {convertToDayOfWeek(dayjs(date).day()) + dayjs(date).format(',h:mA [GMT]Z')}
        </Col>
      </Row>
      <Row style={{ marginTop: '5%' }}>
        <Col span={6}>
          <DetailHeader>Photo</DetailHeader>
        </Col>
        <Col span={18}>
          {originalFileName + format}
          <br /> {filesize(size)} {width} x {height}
        </Col>
      </Row>
      <Row style={{ marginTop: '5%' }}>
        <Col span={6}>
          <DetailHeader>Place</DetailHeader>
        </Col>
        <Col span={18}>{place}</Col>
      </Row>
    </Card>
  );
  return (
    <LayoutWithSearch border={false}>
      {'<'} Photos <br />
      <Header>video-wedding</Header>
      <hr />
      <Row style={{ marginTop: '5%' }}>
        <Col span={13}>
          <VideoPlayerContainer />
        </Col>
        <Col span={10} offset={1}>
          <PeopleCard /> <br />
          <LabelCard /> <br />
          <DetailCard /> <br />
        </Col>
      </Row>
    </LayoutWithSearch>
  );
};

export default ViewVideoPage;
