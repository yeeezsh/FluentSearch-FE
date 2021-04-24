import React from 'react';
import ReactPlayer from 'react-player';
import { VideoPlayerPropsType } from './types';

const VideoPlayer: React.FC<VideoPlayerPropsType> = (props) => {
  const {
    url,
    playerRef,
    muted,
    isPlaying,
    volume,
    playbackRate,
    handleProgress,
  } = props;
  return (
    <ReactPlayer
      url={url}
      ref={playerRef}
      width="100%"
      height="100%"
      muted={muted}
      playing={isPlaying}
      volume={volume}
      playbackRate={parseFloat(playbackRate)}
      onProgress={handleProgress}
      config={{
        file: {
          attributes: {
            crossOrigin: 'anonymous',
          },
        },
      }}
    />
  );
};

export default VideoPlayer;
