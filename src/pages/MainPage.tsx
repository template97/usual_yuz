import './MainPage.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  // useEffect(() => {
  //   axiosRequest('GET', 'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations');
  // }, []);

  return (
    <>
      <Link to="about-me">About Me</Link>
    </>
  );
};

export default MainPage;
