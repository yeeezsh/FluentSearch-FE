import { Row, Col, Card } from 'antd';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React from 'react';
import { PageWrapper } from 'Styles/global';

const PeopleCard = () => (
  <Card title="N People">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

const LabelCard = () => (
  <Card title="N Labels">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

const DetailCard = () => (
  <Card title="Details">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

const ViewVideoPage: React.FC = () => {
  return (
    <LayoutWithSearch border={false}>
      <PageWrapper>
        Photos <br />
        video-wedding <br />
        <hr />
        <Row justify="space-between">
          <Col span={12}>video with marker</Col>
          <Col span={10}>
            <PeopleCard /> <br />
            <LabelCard /> <br />
            <DetailCard /> <br />
          </Col>
        </Row>
      </PageWrapper>
    </LayoutWithSearch>
  );
};

export default ViewVideoPage;
