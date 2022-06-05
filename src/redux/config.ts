import { createSlice } from '@reduxjs/toolkit';
import { IConfig } from 'src/types';

const initialState: IConfig = {
  language: 'en',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig: (state: IConfig, action) => {
      const configData: Partial<IConfig> = action.payload;

      return {
        ...state,
        ...configData,
      };
    },
  },
});

export const configActions = configSlice.actions;
export default configSlice.reducer;
