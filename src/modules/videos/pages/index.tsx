import { Row, Col, Card } from 'antd';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React from 'react';
import { useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import Avatar from '../components/Avatar';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import { annotation } from '../mocks/annotation';
import { DetailHeader, Header, VideoDetailCard } from './styled';

const ViewVideoPage: React.FC = () => {
  const date = useSelector((state: StoresState) => state.video.present.metaData.date);
  const fileName = useSelector(
    (state: StoresState) => state.video.present.metaData.originalFileName,
  );
  const size = useSelector((state: StoresState) => state.video.present.metaData.size);
  const width = useSelector((state: StoresState) => state.video.present.metaData.width);
  const height = useSelector((state: StoresState) => state.video.present.metaData.height);
  const place = useSelector((state: StoresState) => state.video.present.metaData.place);
  const incidents = useSelector((state: StoresState) => state.video.present.label);
  const personIncidents = useSelector((state: StoresState) => state.video.present.person);

  const handleSelectAvatar = () => {
    console.log('selected');
  };

  const numberOfAnnotation = annotation.length;

  const PeopleCard = () => {
    return (
      <VideoDetailCard title={`${numberOfAnnotation} People`}>
        {numberOfAnnotation > 0
          ? annotation.map((el, index) => (
              <Avatar src={el.src} key={index} onClick={() => handleSelectAvatar()} />
            ))
          : 'no people'}
      </VideoDetailCard>
    );
  };

  const LabelCard = () => {
    return <Card title={`${numberOfAnnotation} Labels`}></Card>;
  };

  const DetailCard = () => (
    <Card title="Details">
      <Row>
        <Col>
          <DetailHeader>Date</DetailHeader>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>Photo</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>Place</Col>
        <Col></Col>
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
