import React, { forwardRef } from 'react';
import ReactPlayer from 'react-player';
import Canvas from '../Canvas';
import { VideoPlayerPropsType } from './types';

const VideoPlayer = forwardRef<ReactPlayer, VideoPlayerPropsType>((props, ref) => {
  const {
    url,
    muted,
    isPlaying,
    volume,
    playbackRate,
    handleProgress,
    canvasWidth,
    canvasHeight,
    incidentData,
    played,
    videoWidth,
    videoHeight,
    duration,
    selectedLabel,
    precision,
  } = props;
  return (
    <>
      <Canvas
        selectedLabel={selectedLabel}
        duration={duration}
        width={canvasWidth}
        height={canvasHeight}
        data={incidentData}
        played={played}
        videoHeight={videoHeight}
        videoWidth={videoWidth}
        precision={precision}
      />
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
        style={{ background: 'black' }}
        config={{
          file: {
            attributes: {
              crossOrigin: 'anonymous',
            },
          },
        }}
      />
    </>
  );
});

VideoPlayer.displayName = 'VideoPlayer';
export default VideoPlayer;
