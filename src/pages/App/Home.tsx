import HomeLayout from 'Components/Layouts/Home/HomeLayout';
import React from 'react';
import style from './styles.module.css';

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <div className={style.bg} />
      <div>
        <h1>Heading</h1>
        <p>Lorem ipsum..</p>
      </div>
    </HomeLayout>
  );
};

export default Home;
