import { Row, Col } from 'antd';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React from 'react';
import { PageWrapper } from 'Styles/global';

const ViewVideoPage: React.FC = () => {
  return (
    <LayoutWithSearch border={false}>
      <PageWrapper>
        {'<'} Photos <br />
        video-wedding <br />
        <hr />
        <Row>
          <Col>video with marker</Col>
          <Col>
            people <br />
            labels <br />
            details <br />
          </Col>
        </Row>
      </PageWrapper>
    </LayoutWithSearch>
  );
};

export default ViewVideoPage;
