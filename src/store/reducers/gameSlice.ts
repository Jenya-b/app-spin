import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StatusesLong } from 'services/api/crash';

interface InitialState {
  statusesLongGame: StatusesLong;
  isLongGameUser: boolean;
}

const initialState: InitialState = {
  statusesLongGame: StatusesLong.Done,
  isLongGameUser: false,
};

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setIsLongGame: (state, action: PayloadAction<boolean>) => {
      state.isLongGameUser = action.payload;
    },
    setStatusesLongGame: (state, action: PayloadAction<StatusesLong>) => {
      state.statusesLongGame = action.payload;
    },
    resetGameState() {
      return initialState;
    },
  },
});

export const { setIsLongGame, setStatusesLongGame, resetGameState } = gameSlice.actions;

export default gameSlice.reducer;
