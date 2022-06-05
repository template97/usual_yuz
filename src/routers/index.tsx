import React from 'react';
import ProjectPage from 'src/pages/project/ProjectPage';
import AboutMePage from '../pages/about-me/AboutMePage';

export const MainPathList = ['about-me', 'projects'] as const;
export type MainPath = typeof MainPathList[number];

interface Info {
  element: JSX.Element;
  titleId: string;
}
export const PathInfo: { [key in MainPath]: Info } = {
  'about-me': {
    element: <AboutMePage />,
    titleId: 'path.about-me',
  },
  projects: {
    element: <ProjectPage />,
    titleId: 'path.projects',
  },
};
