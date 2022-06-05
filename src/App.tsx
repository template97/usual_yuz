import React from 'react';
import { IntlProvider } from 'react-intl';
import RootRouter from './routers/RootRouter';
import { useSelector } from 'react-redux';
import { IReducer } from './redux';
import EN_EG from 'src/translations/en.json';
import KO_KR from 'src/translations/ko.json';

const App: React.FC = () => {
  const lang = useSelector<IReducer, string>((state) => state.config.language);

  return (
    <IntlProvider messages={lang === 'ko' ? KO_KR : EN_EG} locale={lang} defaultLocale="en">
      <RootRouter />
    </IntlProvider>
  );
};

export default App;
