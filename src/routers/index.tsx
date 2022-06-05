import React from 'react';
import AboutMePage from '../pages/about-me/AboutMePage';
import MainPage from '../pages/MainPage';

export const MainPathList = ['about-me', ''] as const;
export type MainPath = typeof MainPathList[number];

export const Path2Element: { [key in MainPath]: JSX.Element } = {
  '': <MainPage />,
  'about-me': <AboutMePage />,
};

export const Path2Title: { [key in MainPath]: string } = {
  '': 'Home',
  'about-me': 'About Me',
};
