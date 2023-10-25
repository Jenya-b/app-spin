import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CryptoNameType } from 'interfaces/crypto';

interface InitialStateType {
  currency: CryptoNameType;
}

const initialState: InitialStateType = {
  currency: 'btc',
};

export const currencySlice = createSlice({
  name: 'currencySlice',
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<CryptoNameType>) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
