import { Card, Col, Row } from 'antd';
import Button from 'Components/Button';
import HomeLayout from 'Components/Layouts/Home';
import { APP_FEATURE_CONSTANT } from 'Models/featureCard/constant';
import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import IconSelector from 'Utils/icon-selector';

const Icon = styled.div`
  font-size: 40px;
`;

const gridStyle: CSSProperties = {
  textAlign: 'center',
};

export const Header = styled.div`
  width: 100vw;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  background-image: url('https://pbs.twimg.com/media/ElVxJ8OWMAAnew5.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const H1 = styled.div`
  font-size: 5em;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0em;
`;

export const HeaderText = styled.div`
  color: #ffffff;
`;

const featureCard = [
  APP_FEATURE_CONSTANT.map(({ key, icon, label, description }) => {
    return (
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
    );
  }),
];

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <Header>
        <HeaderText>
          <H1>Heading</H1>
          <p>Lorem ipsum..</p>
          <Button>Explore</Button>
        </HeaderText>
      </Header>
      <Row gutter={[0, 24]} justify="space-around" style={{ marginTop: '20px' }}>
        <Col span={21}>
          <Row justify="center" gutter={[24, 24]}>
            {featureCard}
          </Row>
        </Col>
      </Row>
    </HomeLayout>
  );
};

export default Home;
