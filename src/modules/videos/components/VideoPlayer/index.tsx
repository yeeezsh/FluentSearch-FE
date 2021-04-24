import React, { forwardRef } from 'react';
import ReactPlayer from 'react-player';
import { VideoPlayerPropsType } from './types';

const VideoPlayer = forwardRef<ReactPlayer, VideoPlayerPropsType>((props, ref) => {
  const { url, muted, isPlaying, volume, playbackRate, handleProgress } = props;
  return (
    <ReactPlayer
      url={url}
      ref={ref}
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
});

VideoPlayer.displayName = 'VideoPlayer';
export default VideoPlayer;
