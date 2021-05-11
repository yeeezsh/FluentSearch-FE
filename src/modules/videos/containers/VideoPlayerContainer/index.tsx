import VideoPlayer from 'Modules/videos/components/VideoPlayer';
import { videoActions } from 'Modules/videos/reducers/videoReducer';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { VideoPlayerWrapper } from './styled';

const VideoPlayerContainer: React.FC = () => {
  const dispatch = useDispatch();
  const playerRef = useRef<ReactPlayer>(null);

  const muted = useSelector((state: StoresState) => state.video.present.muted);
  const duration = useSelector((state: StoresState) => state.video.present.duration);
  const playing = useSelector((state: StoresState) => state.video.present.playing);
  const playbackRate = useSelector(
    (state: StoresState) => state.video.present.playbackRate,
  );
  const played = useSelector((state: StoresState) => state.video.present.played);
  const seeking = useSelector((state: StoresState) => state.video.present.seeking);
  const volume = useSelector((state: StoresState) => state.video.present.volume);

  const handleProgress = () => {
    console.log('progress');
  };

  const handlePlaying = () => {
    dispatch(videoActions.setPlaying());
  };

  return (
    <VideoPlayerWrapper>
      <VideoPlayer
        url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ref={playerRef}
        isPlaying={playing}
        muted={muted}
        playbackRate={playbackRate}
        handleProgress={handleProgress}
        volume={volume}
      />
    </VideoPlayerWrapper>
  );
};

export default VideoPlayerContainer;
