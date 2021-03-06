import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from 'src/layout/MainLayout';
import MainPage from 'src/pages/MainPage';
import { MainPathList, PathInfo } from '.';

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {MainPathList.map((path) => (
            <Route key={path} path={`/${path}`} element={PathInfo[path].element} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default RootRouter;
