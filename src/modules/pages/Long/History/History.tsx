import { List } from 'modules/components/List/List';
import {
  Wrapper,
  HistoryBlock,
  HistoryList,
  Title,
  Table,
  HistoryItem,
  historyListCss,
  Result,
  TableRow,
  UserLogo,
  UserName,
  Params,
} from './History.styled';
import { IHistoryData, historyData } from 'data/long';
import { cryptoIcon } from 'constants/images';

interface HistoryProps {
  historyNumbers: number[];
}

export const History = ({ historyNumbers }: HistoryProps) => {
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
    <Wrapper>
      <HistoryBlock>
        <Title>History</Title>
        <HistoryList>
          {historyNumbers.map((item, i) => (
            <HistoryItem key={i}>{item}x</HistoryItem>
          ))}
        </HistoryList>
      </HistoryBlock>
      <Table>
        <List
          renderItem={renderItem}
          renderEmpty={<p>Нет данных</p>}
          data={historyData}
          styles={historyListCss}
        />
      </Table>
    </Wrapper>
  );
};
