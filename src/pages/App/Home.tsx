import Button from 'Components/Button/Button';
import HomeLayout from 'Components/Layouts/Home/HomeLayout';
import React from 'react';
import style from './styles.module.css';

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <div className={style.header}>
        <div className={style.headerText}>
          <h1>Heading</h1>
          <p>Lorem ipsum..</p>
          <Button type="Danger">CANCEL</Button>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
