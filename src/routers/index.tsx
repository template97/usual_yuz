import React from 'react';
import AboutMePage from '../pages/about-me/AboutMePage';
import MainPage from '../pages/MainPage';

export const MainPathList = ['', 'about-me'] as const;
export type MainPath = typeof MainPathList[number];

interface Info {
  element: JSX.Element;
  title: string;
}
export const PathInfo: { [key in MainPath]: Info } = {
  '': {
    element: <MainPage />,
    title: 'Home',
  },
  'about-me': {
    element: <AboutMePage />,
    title: 'About Me',
  },
};
