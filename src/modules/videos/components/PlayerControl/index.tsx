import { Row, Col, Select } from 'antd';
import React, { forwardRef } from 'react';
import {
  BottomControlWrapper,
  BottomIcons,
  ControlIcons,
  ControlWrapper,
  VolumeSliderWrapper,
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
    onMute,
    onMouseUp,
    onVideoSliderChange,
    onToggleFullScreen,
    onPlaybackRateChange,
    onFastForward,
    onRewind,
  } = props;

  const { Option } = Select;

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
          <BackwardOutlined onClick={onRewind} />
        </ControlIcons>
      </Col>
      <Col>
        <ControlIcons>
          {isPlaying ? (
            <PauseOutlined onClick={onPlaying} />
          ) : (
            <CaretRightOutlined onClick={onPlaying} />
          )}
        </ControlIcons>
      </Col>
      <Col>
        <ControlIcons>
          <ForwardOutlined onClick={onFastForward} />
        </ControlIcons>
      </Col>
    </Row>
  );

  const BottomControl = () => (
    <BottomControlWrapper>
      <Row justify="space-between" gutter={[0, 0]}>
        <Col span={24}>
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
      <Row justify="space-between" gutter={[0, 0]}>
        <Col span={6}>
          <Row justify="space-around">
            <Col>
              <BottomIcons>
                {isPlaying ? (
                  <PauseOutlined onClick={onPlaying} />
                ) : (
                  <CaretRightOutlined onClick={onPlaying} />
                )}
              </BottomIcons>
            </Col>
            <Col>
              <BottomIcons>
                {muted ? (
                  <NotificationOutlined onClick={onMute} />
                ) : (
                  <SoundOutlined onClick={onMute} />
                )}
              </BottomIcons>
            </Col>
            <Col>
              <VolumeSliderWrapper>
                <Slider
                  min={0}
                  max={100}
                  played={volume * 100}
                  onMouseDown={onMouseDown}
                  onMouseUp={onMouseUp}
                  onChange={onVideoSliderChange}
                />
              </VolumeSliderWrapper>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Row justify="space-around">
            <Col>
              <Select
                defaultValue="1X"
                bordered={false}
                onChange={onPlaybackRateChange}
                value={playbackRate}
                style={{ color: 'white' }}>
                {['2.0', '1.5', '1', '0.75', '0.5'].map((e, i) => (
                  <Option key={i} value={e}>
                    {e + 'X'}
                  </Option>
                ))}
              </Select>
            </Col>
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
