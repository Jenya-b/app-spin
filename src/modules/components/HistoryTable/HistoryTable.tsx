import { cryptoIcon } from 'constants/images';
import { IHistoryData } from 'data/long';
import { List } from '../List/List';
import { TableRow, Params, UserLogo, UserName, historyListCss } from './HistoryTable.styled';
import { useAppSelector } from 'store';
import { gameSelector } from 'store/selectors';

interface HistoryTableProps {
  historyData: IHistoryData[];
}

export const HistoryTable = ({}: HistoryTableProps) => {
  const {
    longInfo: { bets },
  } = useAppSelector(gameSelector);

  const renderItem = ({
    nickname,
    coin,
    bet,
  }: {
    user_id: number;
    nickname: string;
    coin: number;
    bet: number;
  }) => (
    <TableRow>
      <UserLogo src={cryptoIcon.btc} />
      <UserName>{nickname}</UserName>
      <Params>
        <span>bet:</span>
        <span>{bet}</span>
      </Params>
      <Params>
        <span>coin:</span>
        <span>{coin}x</span>
      </Params>
    </TableRow>
  );

  return (
    <List
      renderItem={renderItem}
      renderEmpty={<p></p>}
      data={bets?.bets ?? []}
      styles={historyListCss}
    />
  );
};
