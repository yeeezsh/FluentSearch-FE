import { Row, Col } from 'antd';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { fetchInsightData } from '../reducers/insightReducer/actions';
import { fetchVideoData } from '../reducers/videoReducer/actions';
import { Header, VideoPlayer, VideoPlayerWrapper } from './styled';
import { insightActions } from '../reducers/insightReducer';
import PeopleCard from '../components/VideoDetailCard/PeopleCard';
import LabelCard from '../components/VideoDetailCard/LabelCard';
import DetailCard from '../components/VideoDetailCard/DetailCard';
import { videoActions } from '../reducers/videoReducer';
import { timeFormatter } from '../utils/timeFormatter';
import { useEventListener } from '../../../common/hooks/useEventListener';
import Canvas from '../components/Canvas';

const ViewVideoPage: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedTime, setSelectedTime] = useState(0);
  const date = useSelector((state: StoresState) => state.video.present.metaData.date);
  const originalFileName = useSelector(
    (state: StoresState) => state.video.present.metaData.originalFileName,
  );
  const format = useSelector((state: StoresState) => state.video.present.metaData.format);
  const size = useSelector((state: StoresState) => state.video.present.metaData.size);
  const width = useSelector((state: StoresState) => state.video.present.metaData.width);
  const height = useSelector((state: StoresState) => state.video.present.metaData.height);
  const place = useSelector((state: StoresState) => state.video.present.metaData.place);
  const url = useSelector((state: StoresState) => state.video.videoFile.url);
  const incidents = useSelector((state: StoresState) => state.insight.present.label);
  const personIncidents = useSelector(
    (state: StoresState) => state.insight.present.person,
  );

  const totalPeople = personIncidents.length;
  const totalIncidents = incidents.length;

  const handleSelectAvatar = (index: number) => {
    dispatch(insightActions.setSelectedPerson({ index: index }));
  };

  const playerContainerRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);

  const muted = useSelector((state: StoresState) => state.video.present.player.muted);
  const playing = useSelector((state: StoresState) => state.video.present.player.playing);
  const playbackRate = useSelector(
    (state: StoresState) => state.video.present.player.playbackRate,
  );
  const played = useSelector((state: StoresState) => state.video.present.player.played);
  const seeking = useSelector((state: StoresState) => state.video.present.player.seeking);
  const volume = useSelector((state: StoresState) => state.video.present.player.volume);
  const fullscreen = useSelector(
    (state: StoresState) => state.video.present.player.fullscreen,
  );

  const videoHeight = useSelector(
    (state: StoresState) => state.video.present.metaData.height,
  );
  const videoWidth = useSelector(
    (state: StoresState) => state.video.present.metaData.width,
  );

  const incidentData = useSelector(
    (state: StoresState) => state.insight.data.annotations,
  );
  const selectedLabel = useSelector(
    (state: StoresState) => state.insight.present.selectedLabel,
  );

  const precision = useSelector((state: StoresState) => state.insight.present.precision);
  const model = useSelector((state: StoresState) => state.insight.present.model);

  const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : 0;
  const durationTime = playerRef.current ? playerRef.current.getDuration() : 0;

  const elaspedTime = timeFormatter(currentTime);

  const totalDuration = timeFormatter(durationTime);

  const handleMarkerClick = (time: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = time - 0.05;
    setSelectedTime(time);
  };

  const handleLabelClick = (selectedLabel: string) => {
    dispatch(insightActions.setSelectedLabel({ category: selectedLabel }));
  };

  const [{ vidWidth, vidHeight }, setVideoSize] = useState<{
    vidWidth: number;
    vidHeight: number;
  }>({
    vidWidth: 0,
    vidHeight: 0,
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  //useEventListener('msFullscreenElement', handleFullScreen, videoRef);
  let duration = 0;
  if (videoRef.current) duration = videoRef.current?.duration;
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('webkitfullscreenchange', () => {
        if (videoRef.current?.clientHeight && videoRef.current?.clientWidth) {
          setVideoSize({
            vidWidth: videoRef.current?.clientWidth,
            vidHeight: videoRef.current?.clientHeight,
          });

          console.log(videoRef.current?.clientHeight, videoRef.current?.clientWidth);
        }
      });
      videoRef.current.addEventListener('timeupdate', () => {
        const played = videoRef.current && videoRef.current?.currentTime;
        if (played) dispatch(videoActions.setProgress({ played: played }));
      });
    }

    return () => {
      if (!videoRef.current) return;
      videoRef.current?.removeEventListener('webkitfullscreenchange', () => {
        console.log('remove');
      });
    };
  }, [videoRef]);

  const changeUrl = (url: string): string => {
    const replaceUrl = url.replace('.mp4', '_c.mp4');
    console.log(replaceUrl);
    return replaceUrl;
  };

  useEffect(() => {
    dispatch(fetchVideoData());
    dispatch(fetchInsightData());
    if (videoRef.current?.clientHeight && videoRef.current?.clientWidth)
      setVideoSize({
        vidWidth: videoRef.current?.clientWidth,
        vidHeight: videoRef.current?.clientHeight,
      });
  }, []);

  return (
    <LayoutWithSearch border={false}>
      {'<'} Photos <br />
      <Header>{originalFileName}</Header>
      <hr />
      <Row style={{ marginTop: '5%' }}>
        <Col span={13}>
          <VideoPlayerWrapper ref={playerContainerRef}>
            <Canvas
              selectedLabel={selectedLabel}
              duration={duration}
              width={vidWidth}
              height={vidHeight}
              data={incidentData}
              played={played}
              videoHeight={videoHeight}
              videoWidth={videoWidth}
              precision={precision}
            />
            <VideoPlayer ref={videoRef} controls muted autoPlay plays-inline>
              <source type="video/mp4" src="videos/sample.mp4" />
              <source type="video/webm" src="videos/sample.webm" />
              <source type="video/mp4" src="videos/sample.m4v" />
              <source type="video/ogg" src="videos/sample.ogv" />
            </VideoPlayer>
          </VideoPlayerWrapper>
          <br />
          <DetailCard
            model={model}
            date={date}
            width={width}
            height={height}
            size={size}
            place={place}
            originalFileName={originalFileName}
            format={format}
          />
        </Col>
        <Col span={10} offset={1}>
          <PeopleCard
            totalPeople={totalPeople}
            incidents={personIncidents}
            handleSelectAvatar={handleSelectAvatar}
          />
          <br />
          <LabelCard
            selectedTime={selectedTime}
            duration={duration}
            totalIncidents={totalIncidents}
            incidents={incidents}
            onMarkerClick={handleMarkerClick}
            onLabelClick={handleLabelClick}
            selectedLabel={selectedLabel}
          />

          <br />
        </Col>
      </Row>
    </LayoutWithSearch>
  );
};

export default ViewVideoPage;
