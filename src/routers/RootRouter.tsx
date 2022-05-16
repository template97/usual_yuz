import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutMePage from '../pages/about-me/AboutMePage';

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="about-me" element={<AboutMePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
