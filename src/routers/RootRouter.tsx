import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutMePage from '../pages/about-me/AboutMePage';
import MainLayout from '../layout/MainLayout';

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="about-me" element={<AboutMePage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default RootRouter;
