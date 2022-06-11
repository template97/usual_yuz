import './MainPage.scss';
import React, { useEffect } from 'react';
import { GET_summoner_by_name } from 'src/api/riot';

const MainPage: React.FC = () => {
  useEffect(() => {
    getSome();
  }, []);

  const getSome = async () => {
    const res = await GET_summoner_by_name('랜턴팔이%20서폿');

    console.log(res.data.puuid);
  };

  return <div className="main-page">Welcome To My Home Page!</div>;
};

export default MainPage;
