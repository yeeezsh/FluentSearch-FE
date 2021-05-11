import { Row, Col, Card } from 'antd';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React from 'react';
import Avatar from '../components/Avatar';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import { annotation } from '../mocks/annotation';
import { VideoDetailCard } from './styled';

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
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

const ViewVideoPage: React.FC = () => {
  return (
    <LayoutWithSearch border={false}>
      {'<'} Photos <br />
      <h3>video-wedding</h3>
      <hr />
      <Row style={{ marginTop: '5%' }}>
        <Col span={12}>
          <VideoPlayerContainer />
        </Col>
        <Col span={10} offset={2}>
          <PeopleCard /> <br />
          <LabelCard /> <br />
          <DetailCard /> <br />
        </Col>
      </Row>
    </LayoutWithSearch>
  );
};

export default ViewVideoPage;
