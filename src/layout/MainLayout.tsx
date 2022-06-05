import './MainLayout.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { MainPathList, Path2Title } from '../routers';

interface Props {
  children?: React.ReactNode;
}
const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div id="main-layout">
      <div id="main-header">
        {MainPathList.map((path) => (
          <Link to={`/${path}`}>{Path2Title[path]}</Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
