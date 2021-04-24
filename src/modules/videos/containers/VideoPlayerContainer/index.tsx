import VideoPlayer from 'Modules/videos/components/VideoPlayer';
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { VideoPlayerWrapper } from './styled';
import { VideoPlayerStateType } from './types';

const VideoPlayerContainer: React.FC = () => {
  const [videoPlayerState, setVideoPlayerState] = useState<VideoPlayerStateType>({
    muted: false,
    isPlaying: false,
    volume: 50 / 100,
    playbackRate: '1.0',
    isSeeking: false,
    duration: 0,
    played: 0,
  });

  const playerRef = useRef<ReactPlayer>(null);

  const handleProgress = () => {
    console.log('onProgress', videoPlayerState.played);
    if (!videoPlayerState.isSeeking)
      setVideoPlayerState((prevState) => ({
        ...prevState,
        played: videoPlayerState.played,
      }));
  };

  return (
    <VideoPlayerWrapper>
      <VideoPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ref={playerRef}
        isPlaying={videoPlayerState.isPlaying}
        muted={videoPlayerState.muted}
        playbackRate={videoPlayerState.playbackRate}
        handleProgress={handleProgress}
        volume={videoPlayerState.volume}
      />
    </VideoPlayerWrapper>
  );
};

export default VideoPlayerContainer;
