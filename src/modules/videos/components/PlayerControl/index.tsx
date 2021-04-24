import React, { forwardRef } from 'react';
import { ControlWrapper } from './styled';
import { PlayerControlPropsType } from './types';

const PlayerControl = forwardRef<HTMLDivElement, PlayerControlPropsType>((props, ref) => {
  const { isPlaying, muted, onPlaying, volume, playbackRate, played } = props;
  return <ControlWrapper></ControlWrapper>;
});

PlayerControl.displayName = 'PlayerControl';
export default PlayerControl;
