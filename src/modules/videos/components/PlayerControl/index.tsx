import { Row, Col, Select } from 'antd';
import React, { forwardRef } from 'react';
import {
  BottomControlWrapper,
  BottomIcons,
  ControlIcons,
  ControlWrapper,
  Overlay,
  TimeFormatButton,
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
    playing,
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
    elaspedTime,
    totalDuration,
    onChangeDisplayFormat,
    fullscreen,
  } = props;

  const { Option } = Select;

  const MiddleControl = () => (
    <Row justify="center">
      <Col>
        <ControlIcons>
          <BackwardOutlined onClick={onRewind} />
        </ControlIcons>
      </Col>
      <Col>
        <ControlIcons>
          {playing ? (
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
      <Row justify="space-between">
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
      <Row justify="space-between">
        <Col xl={14}>
          <Row>
            <Col xl={2} push={1}>
              <BottomIcons>
                {playing ? (
                  <PauseOutlined onClick={onPlaying} />
                ) : (
                  <CaretRightOutlined onClick={onPlaying} />
                )}
              </BottomIcons>
            </Col>
            <Col xl={2} push={2}>
              <BottomIcons>
                {muted ? (
                  <NotificationOutlined onClick={onMute} />
                ) : (
                  <SoundOutlined onClick={onMute} />
                )}
              </BottomIcons>
            </Col>
            <Col xl={6} push={3}>
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
            <Col xl={4} push={4}>
              <TimeFormatButton type="text" onClick={() => onChangeDisplayFormat()}>
                {elaspedTime} / {totalDuration}
              </TimeFormatButton>
            </Col>
          </Row>
        </Col>
        <Col xl={6}>
          <Row justify="space-around">
            <Col xl={2} pull={1}>
              <Select
                defaultValue="1X"
                bordered={false}
                onChange={onPlaybackRateChange}
                value={playbackRate}
                style={{ color: 'white', margin: 0 }}>
                {['2.0', '1.5', '1', '0.75', '0.5'].map((e, i) => (
                  <Option key={i} value={e}>
                    {e + 'X'}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col xl={2} pull={1}>
              <BottomIcons>
                <ExpandOutlined onClick={onToggleFullScreen} />
              </BottomIcons>
            </Col>
          </Row>
        </Col>
      </Row>
    </BottomControlWrapper>
  );

  return (
    <Overlay ref={ref}>
      <ControlWrapper fullscreen={fullscreen}>
        <MiddleControl />
        <BottomControl />
      </ControlWrapper>
    </Overlay>
  );
});

PlayerControl.displayName = 'PlayerControl';
export default PlayerControl;
