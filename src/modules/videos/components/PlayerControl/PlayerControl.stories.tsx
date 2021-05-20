import { Meta } from '@storybook/react';
import React from 'react';
import { GlobalStyle } from 'Styles/global';
import PlayerControl from '.';

export default {
  title: 'FluentSearch/PlayerControl',
  component: PlayerControl,
} as Meta;

export const PlayerControlStories: React.FC = () => {
  const handleMock = () => {
    console.log('Mock');
  };

  const handleMockWithEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <GlobalStyle />
      <PlayerControl
        fullscreen={false}
        seeking={false}
        duration={3.0}
        playing={false}
        muted={false}
        volume={50}
        playbackRate={'1.0'}
        played={50}
        onFastForward={handleMock}
        onMute={handleMock}
        onPlaying={handleMock}
        onMouseDown={handleMock}
        onMouseUp={handleMock}
        onVideoSliderChange={handleMockWithEvent}
        onToggleFullScreen={handleMock}
        onPlaybackRateChange={handleMock}
        onRewind={handleMock}
        totalDuration={'33.00'}
        elaspedTime={'00.00'}
        onVolumeSliderChange={handleMock}
      />
    </>
  );
};
