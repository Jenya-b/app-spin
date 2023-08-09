import {
  Wrapper,
  HistoryBlock,
  HistoryList,
  Title,
  TableWrap,
  HistoryItem,
} from './History.styled';
import { historyData } from 'data/long';
import { HistoryTable } from 'modules/components/HistoryTable/HistoryTable';

interface HistoryProps {
  historyNumbers: number[];
}

export const History = ({ historyNumbers }: HistoryProps) => {
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
      <TableWrap>
        <HistoryTable historyData={historyData} />
      </TableWrap>
    </Wrapper>
  );
};
