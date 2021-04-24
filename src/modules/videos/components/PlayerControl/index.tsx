import { Row, Col } from 'antd';
import React, { forwardRef } from 'react';
import { ControlIcons, ControlWrapper } from './styled';
import { PlayerControlPropsType } from './types';
import {
  CaretRightOutlined,
  ExpandOutlined,
  ForwardOutlined,
  BackwardOutlined,
  SoundOutlined,
  PauseOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

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

  const MiddleControl = () => (
    <Row justify="center">
      <Col>
        <ControlIcons>
          <BackwardOutlined />
        </ControlIcons>
      </Col>
      <Col>
        <ControlIcons>
          {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
        </ControlIcons>
      </Col>
      <Col>
        <ControlIcons>
          <ForwardOutlined />
        </ControlIcons>
      </Col>
    </Row>
  );

  return (
    <ControlWrapper ref={ref}>
      <TopControl />
      <br />
      <MiddleControl />
      <br />
      botttomocontrol
      <br />
    </ControlWrapper>
  );
});

PlayerControl.displayName = 'PlayerControl';
export default PlayerControl;
