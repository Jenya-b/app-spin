import { INotify } from 'store/reducers/notifySlice';

interface INotifyMessage {
  [index: string]: INotify;
}

export const alertMessage: INotifyMessage = {
  crashSuccess: { message: 'Bet is placed', type: 'success' },
  crashErrorRun: { message: 'The game is already underway', type: 'error' },
};
