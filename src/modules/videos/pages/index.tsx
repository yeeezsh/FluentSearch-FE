import { Row, Col } from 'antd';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import { fetchInsightData } from '../reducers/insightReducer/actions';
import { fetchVideoData } from '../reducers/videoReducer/actions';
import { Header } from './styled';
import { insightActions } from '../reducers/insightReducer';
import PeopleCard from '../components/VideoDetailCard/PeopleCard';
import LabelCard from '../components/VideoDetailCard/LabelCard';
import DetailCard from '../components/VideoDetailCard/DetailCard';

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

  const totalPeople = personIncidents.length;
  const totalIncidents = incidents.length;

  const handleSelectAvatar = (index: number) => {
    dispatch(insightActions.setSelectedPerson({ index: index }));
  };

  useEffect(() => {
    dispatch(fetchVideoData());
    dispatch(fetchInsightData());
  }, []);

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
          <PeopleCard
            totalPeople={totalPeople}
            incidents={personIncidents}
            handleSelectAvatar={handleSelectAvatar}
          />
          <br />
          <LabelCard totalIncidents={totalIncidents} incidents={incidents} /> <br />
          <DetailCard
            date={date}
            width={width}
            height={height}
            size={size}
            place={place}
            originalFileName={originalFileName}
            format={format}
          />{' '}
          <br />
        </Col>
      </Row>
    </LayoutWithSearch>
  );
};

export default ViewVideoPage;
