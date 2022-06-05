import { combineReducers } from 'redux';
import { IConfig } from 'src/types';
import config from './config';

export interface IReducer {
  config: IConfig;
}

const rootReducer = combineReducers<IReducer>({
  config,
});

export default rootReducer;
