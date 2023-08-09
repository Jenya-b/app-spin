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

interface HistoryTableProps {
  historyData: IHistoryData[];
}

export const HistoryTable = ({ historyData }: HistoryTableProps) => {
  const renderItem = ({ userName, bet, withdraw, result }: IHistoryData) => (
    <TableRow>
      <UserLogo src={cryptoIcon.btc} />
      <UserName>{userName}</UserName>
      <Params>
        <span>bet:</span>
        <span>{bet}</span>
      </Params>
      <Params>
        <span>withdraw:</span>
        <span>{withdraw}x</span>
      </Params>
      <Result>{result}x</Result>
    </TableRow>
  );

  return (
    <List
      renderItem={renderItem}
      renderEmpty={<p>Нет данных</p>}
      data={historyData}
      styles={historyListCss}
    />
  );
};
