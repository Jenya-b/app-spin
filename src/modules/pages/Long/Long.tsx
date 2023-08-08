import { historyNumbers, inGameData } from 'data/long';
import { Main } from './Long.styled';
import { Transfer } from './Transfer/Transfer';
import { History } from './History/History';

export const LongPage = () => {
  return (
    <Main>
      <Transfer data={inGameData} />
      <History historyNumbers={historyNumbers} />
    </Main>
  );
};

export default LongPage;
