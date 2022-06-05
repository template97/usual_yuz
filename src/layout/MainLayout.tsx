import './MainLayout.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { MainPathList, Path2Title } from 'src/routers';
import Button from 'src/components/Button';

interface Props {
  children?: React.ReactNode;
}
const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div id="main-layout">
      <div id="main-header">
        {MainPathList.map((path) => (
          <Button size="medium">
            <Link to={`/${path}`}>{Path2Title[path]}</Link>
          </Button>
        ))}
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
