import { Card, Col, Row } from 'antd';
import Button from 'Components/Button';
import HomeLayout from 'Modules/home/components/Layouts';
import { APP_FEATURE_CONSTANT } from 'Models/featureCard/constant';
import React from 'react';
import IconSelector from 'Utils/icon-selector';
import { gridStyle, HeaderWrapper, Heading, Icon } from './styled';

const FeatureCard: React.FC = () => {
  return (
    <>
      {APP_FEATURE_CONSTANT.map(({ key, icon, label, description }) => (
        <Col xs={20} md={5} lg={7} key={key}>
          <Card style={gridStyle}>
            <Icon>
              <IconSelector type={icon} />
            </Icon>
            <br />
            <h2>{label}</h2>
            <p>{description}</p>
          </Card>
        </Col>
      ))}
    </>
  );
};

const HomePage: React.FC = () => {
  return (
    <HomeLayout>
      <HeaderWrapper>
        <Heading>Heading</Heading>
        <p>Lorem ipsum..</p>
        <Button>Explore</Button>
      </HeaderWrapper>
      <Row gutter={[0, 24]} justify="space-around" style={{ marginTop: '20px' }}>
        <Col span={21}>
          <Row justify="center" gutter={[24, 24]}>
            <FeatureCard />
          </Row>
        </Col>
      </Row>
    </HomeLayout>
  );
};

export default HomePage;
