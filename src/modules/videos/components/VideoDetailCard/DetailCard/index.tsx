import { Row, Col } from 'antd';
import dayjs from 'dayjs';
import filesize from 'filesize';
import { DetailHeader } from 'Modules/videos/pages/styled';
import { convertToDayOfWeek } from 'Modules/videos/utils/convertToDayOfWeek';
import { format } from 'path';
import React from 'react';
import { VideoDetailCard } from '../styled';
import { DetailCardPropsType } from './types';

const DetailCard: React.FC<DetailCardPropsType> = (props) => {
  const { date, width, height, size, place, originalFileName } = props;
  return (
    <VideoDetailCard title="Details">
      <Row>
        <Col span={6}>
          <DetailHeader>Date</DetailHeader>
        </Col>
        <Col span={18}>
          {dayjs(date).format('MMM DD, YYYY')}
          <br />
          {convertToDayOfWeek(dayjs(date).day()) + dayjs(date).format(',h:mA [GMT]Z')}
        </Col>
      </Row>
      <Row style={{ marginTop: '5%' }}>
        <Col span={6}>
          <DetailHeader>Photo</DetailHeader>
        </Col>
        <Col span={18}>
          {originalFileName + format}
          <br /> {filesize(size)} {width} x {height}
        </Col>
      </Row>
      <Row style={{ marginTop: '5%' }}>
        <Col span={6}>
          <DetailHeader>Place</DetailHeader>
        </Col>
        <Col span={18}>{place}</Col>
      </Row>
    </VideoDetailCard>
  );
};

export default DetailCard;
