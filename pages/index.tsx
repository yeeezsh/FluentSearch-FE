import { Card, Col, Row } from 'antd';
import CustomButton from 'Components/Button/CustomButton';
import HomeLayout from 'Components/Layouts/Home/HomeLayout';
import APP_FEATURE_CONSTANT from 'Models/featureCard/app.feature.constant';
import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import style from 'Styles/Home.module.css';
import IconSelector from 'Utils/iconSelector';

const Icon = styled.div`
  font-size: 40px;
`;

const gridStyle: CSSProperties = {
  textAlign: 'center',
};

const featureCard = [
  APP_FEATURE_CONSTANT.map(({ key, icon, label, description }) => {
    return (
      <Col md={5} lg={7} key={key}>
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
      <div className={style.header}>
        <div className={style.headerText}>
          <h1>Heading</h1>
          <p>Lorem ipsum..</p>
          <CustomButton>Explore</CustomButton>
        </div>
      </div>
      <Row gutter={[0, 24]} justify="space-around" style={{ marginTop: '20px' }}>
        <Col span={20}>
          <Row justify="center" gutter={[24, 24]}>
            {featureCard}
          </Row>
        </Col>
      </Row>
    </HomeLayout>
  );
};

export default Home;
