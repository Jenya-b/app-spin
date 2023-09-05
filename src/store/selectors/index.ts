import { RootState } from 'store';

export const settingSelector = (state: RootState) => state.settingReducer;
export const userSelector = (state: RootState) => state.userSlice;
