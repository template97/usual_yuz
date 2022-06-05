import './MainLayout.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPathList, PathInfo } from 'src/routers';
import { useDispatch, useSelector } from 'react-redux';
import { IReducer } from 'src/redux';
import Button from 'src/components/Button';
import { configActions } from 'src/redux/config';
import { FormattedMessage } from 'react-intl';

interface Props {
  children?: React.ReactNode;
}
const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lang = useSelector<IReducer, string>((state) => state.config.language);

  return (
    <div id="main-layout">
      <div id="main-header">
        <Button size="medium" onClick={() => navigate('/')}>
          <FormattedMessage id="path.home" />
        </Button>
        <div className="navigator">
          {MainPathList.map((path) => (
            <Button size="medium" onClick={() => navigate(`/${path}`)}>
              <FormattedMessage id={PathInfo[path].titleId} />
            </Button>
          ))}
        </div>
        <Button
          size="medium"
          onClick={() => dispatch(configActions.setConfig({ language: lang === 'en' ? 'ko' : 'en' }))}>
          {lang}
        </Button>
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
