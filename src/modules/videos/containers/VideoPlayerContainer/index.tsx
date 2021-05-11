import PlayerControl from 'Modules/videos/components/PlayerControl';
import VideoPlayer from 'Modules/videos/components/VideoPlayer';
import { videoActions } from 'Modules/videos/reducers/videoReducer';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { VideoPlayerWrapper } from './styled';
import screenful from 'screenfull';
import { PlaybackRate, ProgressState } from 'Modules/videos/models/types';

const VideoPlayerContainer: React.FC = () => {
  const dispatch = useDispatch();

  const playerRef = useRef<ReactPlayer>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);

  const muted = useSelector((state: StoresState) => state.video.present.muted);
  const duration = useSelector((state: StoresState) => state.video.present.duration);
  const playing = useSelector((state: StoresState) => state.video.present.playing);
  const playbackRate = useSelector(
    (state: StoresState) => state.video.present.playbackRate,
  );
  const played = useSelector((state: StoresState) => state.video.present.played);
  const seeking = useSelector((state: StoresState) => state.video.present.seeking);
  const volume = useSelector((state: StoresState) => state.video.present.volume);

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
    if (screenful.isEnabled && playerContainerRef.current)
      screenful.toggle(playerContainerRef.current);
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

  return (
    <VideoPlayerWrapper
      ref={playerContainerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <VideoPlayer
        url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ref={playerRef}
        isPlaying={playing}
        muted={muted}
        playbackRate={playbackRate}
        handleProgress={handleProgress}
        volume={volume}
      />
      <PlayerControl
        ref={controlRef}
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
      />
    </VideoPlayerWrapper>
  );
};

export default VideoPlayerContainer;
