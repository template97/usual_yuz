import './MainLayout.scss';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}
const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div id="main-layout">
      <div id="main-header">HEADER</div>
      {/* <div id="main-left-panel">LEFTPANEL</div> */}
      {children}
    </div>
  );
};

export default MainLayout;
