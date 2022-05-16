import './MainPage.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <>
      <Link to="about-me">About Me</Link>
    </>
  );
};

export default MainPage;
