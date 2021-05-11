import VideoPlayer from 'Modules/videos/components/VideoPlayer';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import { VideoPlayerWrapper } from './styled';

const VideoPlayerContainer: React.FC = () => {
  const playerRef = useRef<ReactPlayer>(null);

  const muted = useSelector((state: StoresState) => state.video.muted);
  const duration = useSelector((state: StoresState) => state.video.duration);
  const playing = useSelector((state: StoresState) => state.video.playing);
  const playbackRate = useSelector((state: StoresState) => state.video.playbackRate);
  const played = useSelector((state: StoresState) => state.video.played);
  const seeking = useSelector((state: StoresState) => state.video.seeking);
  const volume = useSelector((state: StoresState) => state.video.volume);

  const handleProgress = () => {
    console.log('progress');
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
