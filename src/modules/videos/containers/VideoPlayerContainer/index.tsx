import React, { useState } from 'react';
import { VideoPlayerWrapper } from './styled';
import { VideoPlayerStateType } from './types';

const VideoPlayerContainer = () => {
  const [videoPlayerState, setVideoPlayerState] = useState<VideoPlayerStateType>({
    muted: false,
    playing: false,
    volume: 50 / 100,
    playbackRate: '1.0',
    seeking: false,
    duration: 0,
    played: 0,
  });

  return <VideoPlayerWrapper></VideoPlayerWrapper>;
};

export default VideoPlayerContainer;
