import { Row, Col } from 'antd';
import React, { forwardRef } from 'react';
import {
  BottomControlWrapper,
  BottomIcons,
  ControlIcons,
  ControlWrapper,
} from './styled';
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
import Slider from '../Slider';

const PlayerControl = forwardRef<HTMLDivElement, PlayerControlPropsType>((props, ref) => {
  const {
    isPlaying,
    muted,
    onPlaying,
    volume,
    playbackRate,
    played,
    onMouseDown,
    onMouseUp,
    onVideoSliderChange,
    onToggleFullScreen,
  } = props;

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

  const BottomControl = () => (
    <BottomControlWrapper>
      <Row>
        <Col>
          <Slider
            min={0}
            max={100}
            played={played * 100}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onChange={onVideoSliderChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <BottomIcons>
                <ExpandOutlined
                  style={{ paddingTop: '0.2rem' }}
                  onClick={onToggleFullScreen}
                />
              </BottomIcons>
            </Col>
          </Row>
        </Col>
      </Row>
    </BottomControlWrapper>
  );

  return (
    <ControlWrapper ref={ref}>
      <TopControl />
      <br />
      <MiddleControl />
      <br />
      <BottomControl />
      <br />
    </ControlWrapper>
  );
});

PlayerControl.displayName = 'PlayerControl';
export default PlayerControl;
