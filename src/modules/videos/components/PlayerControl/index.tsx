import { Row, Col } from 'antd';
import React, { forwardRef } from 'react';
import { ControlWrapper } from './styled';
import { PlayerControlPropsType } from './types';

const PlayerControl = forwardRef<HTMLDivElement, PlayerControlPropsType>((props, ref) => {
  const { isPlaying, muted, onPlaying, volume, playbackRate, played } = props;

  const TopControl = () => (
    <Row justify="space-between" style={{ padding: 16 }}>
      <Col>
        <h4 style={{ color: 'white' }}>Video Title</h4>
      </Col>
      <Col>bookmark</Col>
    </Row>
  );

  return (
    <ControlWrapper ref={ref}>
      <TopControl />
      <br />
      middlecontrol
      <br />
      botttomocontrol
      <br />
    </ControlWrapper>
  );
});

PlayerControl.displayName = 'PlayerControl';
export default PlayerControl;
