import { cryptoIcon } from 'constants/images';
import { IHistoryData } from 'data/long';
import { List } from '../List/List';
import {
  TableRow,
  Params,
  Result,
  UserLogo,
  UserName,
  historyListCss,
} from './HistoryTable.styled';
import { useCurRoundBetsQuery } from 'services';

interface HistoryTableProps {
  historyData: IHistoryData[];
}

export const HistoryTable = ({ historyData }: HistoryTableProps) => {
  const { data } = useCurRoundBetsQuery(null);

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
      data={data?.result ?? []}
      styles={historyListCss}
    />
  );
};
