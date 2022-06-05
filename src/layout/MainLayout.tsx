import './MainLayout.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { MainPathList, PathInfo } from 'src/routers';

interface Props {
  children?: React.ReactNode;
}
const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div id="main-layout">
      <div id="main-header">
        {MainPathList.map((path) => (
          <Link to={`/${path}`}>{PathInfo[path].title}</Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
