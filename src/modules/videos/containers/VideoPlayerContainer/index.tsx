import PlayerControl from 'Modules/videos/components/PlayerControl';
import VideoPlayer from 'Modules/videos/components/VideoPlayer';
import { videoActions } from 'Modules/videos/reducers/videoReducer';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { VideoPlayerWrapper } from './styled';
import { ProgressState } from './types';
import screenful from 'screenfull';

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

  return (
    <VideoPlayerWrapper ref={playerContainerRef} onMouseMove={} onMouseLeave={}>
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
        onPlaying={handlePlaying}
        onFastForward={() => console.log('temp')}
        onMouseDown={() => console.log('temp')}
        onMouseUp={() => console.log('temp')}
        onMute={handleMuted}
        onPlaybackRateChange={() => console.log('temp')}
        onRewind={() => console.log('temp')}
        onToggleFullScreen={handleToggleFullScreen}
        onVideoSliderChange={() => console.log('temp')}
      />
    </VideoPlayerWrapper>
  );
};

export default VideoPlayerContainer;
