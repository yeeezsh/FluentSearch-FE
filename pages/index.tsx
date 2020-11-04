import { Card, Col, Row } from 'antd';
import Button from 'Components/Button/Button';
import HomeLayout from 'Components/Layouts/Home/HomeLayout';
import React from 'react';
import style from 'Styles/Home.module.css';

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
        <Col span={6}>
          <Card> Feature 1 </Card>
        </Col>
        <Col span={6}>
          <Card> Feature 1 </Card>
        </Col>
        <Col span={6}>
          <Card> Feature 1 </Card>
        </Col>
      </Row>
      <Row gutter={[0, 24]} justify="space-around">
        <Col span={6}>
          <Card> Feature 1 </Card>
        </Col>
        <Col span={6}>
          <Card> Feature 1 </Card>
        </Col>
        <Col span={6}>
          <Card> Feature 1 </Card>
        </Col>
      </Row>
    </HomeLayout>
  );
};

export default Home;
