import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LongResponse, StatusesLong } from 'services/api/crash';
import { Balance } from 'services/api/user';

interface BetsInfo {
  user_id: number;
  nickname: string;
  coin: number;
  bet: number;
}

interface Bets {
  bets: BetsInfo[];
  sum: { [key: string]: number } | null;
}

interface LongInfo {
  bets: Bets;
  round_info: LongResponse | null;
  round_history: number[];
  my_balance: Balance | null;
  my_bet: { coin: string; value: number } | null;
}

interface InitialState {
  statusesLongGame: StatusesLong;
  isLongGameUser: boolean;
  longInfo: LongInfo;
}

const initialState: InitialState = {
  longInfo: {
    bets: {
      bets: [],
      sum: null,
    },
    round_info: null,
    round_history: [],
    my_balance: null,
    my_bet: null,
  },
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
    setLongInfo: (state, action: PayloadAction<LongInfo>) => {
      state.longInfo = action.payload;
    },
    resetGameState() {
      return initialState;
    },
  },
});

export const { setIsLongGame, setStatusesLongGame, resetGameState, setLongInfo } =
  gameSlice.actions;

export default gameSlice.reducer;
