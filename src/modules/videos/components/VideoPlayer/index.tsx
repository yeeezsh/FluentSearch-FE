import React from 'react';
import ReactPlayer from 'react-player';
import { VideoPlayerPropsType } from './types';

const VideoPlayer: React.FC<VideoPlayerPropsType> = (props) => {
  const { playerRef, muted, isPlaying, volume, playbackRate, handleProgress } = props;
  return (
    <ReactPlayer
      url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
