import { CarOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Button from 'Components/Button/Button';
import HomeLayout from 'Components/Layouts/Home/HomeLayout';
import APP_FEATURE_CONSTANT from 'Models/featureCard/app.feature.constant';
import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import style from 'Styles/Home.module.css';

const Icon = styled.div`
  font-size: 40px;
`;

const gridStyle: CSSProperties = {
  textAlign: 'center',
};

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <div className={style.header}>
        <div className={style.headerText}>
          <h1>Heading</h1>
          <p>Lorem ipsum..</p>
          <Button type="Danger">Explore</Button>
        </div>
      </div>
      <Row gutter={[0, 24]} justify="space-around" style={{ marginTop: '20px' }}>
        {APP_FEATURE_CONSTANT.map(({ key, icon, label, description }) => {
          return (
            <Col span={6} key={key}>
              <Card style={gridStyle}>
                <Icon>{icon}</Icon>
                <br />
                <h2>{label}</h2>
                <p>{description}</p>
              </Card>
            </Col>
          );
        })}

        <Col span={6}>
          <Card style={gridStyle}>
            <Icon>
              <CarOutlined />
            </Icon>
            <br />
            <h2>Feature 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum iusto
              magni eius autem non rerum hic asperiores accusantium ab, doloribus laborum
              voluptates.
            </p>
          </Card>
        </Col>
      </Row>
    </HomeLayout>
  );
};

export default Home;
