import { Row, Col } from 'antd';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { fetchInsightData } from '../reducers/insightReducer/actions';
import { fetchVideoData } from '../reducers/videoReducer/actions';
import { Header, VideoPlayerWrapper } from './styled';
import { insightActions } from '../reducers/insightReducer';
import PeopleCard from '../components/VideoDetailCard/PeopleCard';
import LabelCard from '../components/VideoDetailCard/LabelCard';
import DetailCard from '../components/VideoDetailCard/DetailCard';
import ReactPlayer from 'react-player';
import { videoActions } from '../reducers/videoReducer';
import { PlaybackRate, ProgressState } from '../models/types';
import screenful from 'screenfull';
import PlayerControl from '../components/PlayerControl';
import VideoPlayer from '../components/VideoPlayer';
import { timeFormatter } from '../utils/timeFormatter';

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

  const playerRef = useRef<ReactPlayer>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);

  const muted = useSelector((state: StoresState) => state.video.present.player.muted);
  const duration = useSelector(
    (state: StoresState) => state.video.present.player.duration,
  );
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
  const timeDisplayFormat = useSelector(
    (state: StoresState) => state.video.present.player.timeDisplayFormat,
  );

  const videoHeight = useSelector(
    (state: StoresState) => state.video.present.metaData.height,
  );
  const videoWidth = useSelector(
    (state: StoresState) => state.video.present.metaData.width,
  );

  const incidentData = useSelector((state: StoresState) => state.insight.incidentData);
  const selectedLabel = useSelector(
    (state: StoresState) => state.insight.present.selectedLabel,
  );

  const handleProgress = (changeState: ProgressState) => {
    if (!seeking) dispatch(videoActions.setProgress({ played: changeState.played }));
  };

  const handlePlaying = () => {
    dispatch(videoActions.setPlaying());
  };

  const handleRewind = () => {
    if (playerRef.current)
      playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastForward = () => {
    if (playerRef.current)
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleMuted = () => {
    dispatch(videoActions.setMuted());
    const defaultVolume = 50 / 100;
    if (muted !== false) {
      dispatch(videoActions.setVolume({ volume: defaultVolume, muted: false }));
    }
  };

  const handleToggleFullScreen = () => {
    if (screenful.isEnabled && playerContainerRef.current) {
      screenful.toggle(playerContainerRef.current);
      dispatch(videoActions.setFullScreen());
    }
  };

  const handleMouseMove = () => {
    if (!controlRef.current) return;
    controlRef.current.style.visibility = 'visible';
  };

  const handleMouseLeave = () => {
    if (!controlRef.current) return;
    controlRef.current.style.visibility = 'hidden';
  };

  const handlePlaybackRateChange = (value: PlaybackRate) => {
    dispatch(videoActions.setPlaybackRate({ playbackRate: value }));
  };

  const handleDisplayFormat = () => {
    const format = timeDisplayFormat === 'normal' ? 'remaining' : 'normal';
    dispatch(videoActions.setTimeDisplayFormat({ format: format }));
  };

  let canvasWidth = 556;
  let canvasHeight = 288;

  const playerWidth = controlRef.current?.clientWidth;
  canvasWidth = playerWidth ? playerWidth : canvasWidth;

  const playerHeight = controlRef.current?.clientHeight;
  canvasHeight = playerHeight ? playerHeight : canvasHeight;

  const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : 0;
  const durationTime = playerRef.current ? playerRef.current.getDuration() : 0;

  const elaspedTime =
    timeDisplayFormat === 'normal'
      ? timeFormatter(currentTime)
      : `-${timeFormatter(durationTime - currentTime)}`;

  const totalDuration = timeFormatter(durationTime);

  const handleMarkerClick = (nFps: number) => {
    playerRef.current?.seekTo(nFps);
    alert('marker clicked!');
  };

  const handleLabelClick = (selectedLabel: string) => {
    dispatch(insightActions.setSelectedLabel({ category: selectedLabel }));
  };

  useEffect(() => {
    dispatch(videoActions.setDuration({ duration: durationTime }));
    dispatch(fetchVideoData());
    dispatch(fetchInsightData());
  }, []);

  return (
    <LayoutWithSearch border={false}>
      {'<'} Photos <br />
      <Header>{originalFileName}</Header>
      <hr />
      <Row style={{ marginTop: '5%' }}>
        <Col span={13}>
          <VideoPlayerWrapper
            ref={playerContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
            <VideoPlayer
              url="videos/sample.mp4"
              ref={playerRef}
              isPlaying={playing}
              muted={muted}
              playbackRate={playbackRate}
              handleProgress={handleProgress}
              volume={volume}
              canvasWidth={canvasWidth}
              canvasHeight={canvasHeight}
              incidentData={incidentData}
              played={played}
              videoHeight={videoHeight}
              videoWidth={videoWidth}
            />

            <PlayerControl
              ref={controlRef}
              fullscreen={fullscreen}
              played={played}
              muted={muted}
              volume={volume}
              playing={playing}
              seeking={seeking}
              duration={duration}
              playbackRate={playbackRate}
              onPlaying={handlePlaying}
              onRewind={handleRewind}
              onFastForward={handleFastForward}
              onMute={handleMuted}
              onPlaybackRateChange={handlePlaybackRateChange}
              onToggleFullScreen={handleToggleFullScreen}
              onVideoSliderChange={() => console.log('temp')}
              onMouseUp={() => console.log('temp')}
              onMouseDown={() => console.log('temp')}
              onChangeDisplayFormat={handleDisplayFormat}
              elaspedTime={elaspedTime}
              totalDuration={totalDuration}
            />
          </VideoPlayerWrapper>
        </Col>
        <Col span={10} offset={1}>
          <PeopleCard
            totalPeople={totalPeople}
            incidents={personIncidents}
            handleSelectAvatar={handleSelectAvatar}
          />
          <br />
          <LabelCard
            duration={duration}
            totalIncidents={totalIncidents}
            incidents={incidents}
            played={played}
            onMarkerClick={handleMarkerClick}
            onLabelClick={handleLabelClick}
            selectedLabel={selectedLabel}
          />
          <br />
          <DetailCard
            date={date}
            width={width}
            height={height}
            size={size}
            place={place}
            originalFileName={originalFileName}
            format={format}
          />
          <br />
        </Col>
      </Row>
    </LayoutWithSearch>
  );
};

export default ViewVideoPage;
